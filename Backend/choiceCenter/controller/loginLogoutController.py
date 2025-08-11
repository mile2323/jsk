from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from choiceCenter.models import ChoiceCenter,Token
from ..serializers import ChoiceCenterSerializer,TokenSerializer
from django.contrib.auth.hashers import check_password,make_password
from django.core.mail import send_mail
import jwt
import requests
import os
from django.http import HttpResponse
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
import time
from django.conf import settings
from django.http import JsonResponse
from choiceCenter.authentication import CookieTokenAuthentication

class RegisterView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = ChoiceCenterSerializer(data=request.data)
        if serializer.is_valid():
            choicecenter = serializer.save()
            
            return Response({"message": "Choice Center  registered successfully"}, status=status.HTTP_201_CREATED)
        print(serializer.errors)  #
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            choicecenter = ChoiceCenter.objects.get(email=email)
            if check_password(password, choicecenter.password):
                token = Token.objects(choicecenter=choicecenter).first()
                if not token:
                    token = Token(choicecenter=choicecenter)
                    token.save()
                
                response = JsonResponse({"message": "Login successful"})
                response.set_cookie(
                    key='auth_token',
                    value=token.key,
                    httponly=True,
                    secure=False,  # Use True in production with HTTPS
                    samesite='Lax',  # Adjust based on frontend-backend domain setup
                )
                return response

            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        except ChoiceCenter.DoesNotExist:
            return Response({"error": "choicecenter not found"}, status=status.HTTP_404_NOT_FOUND)
        
class LogoutView(APIView):
    def post(self, request):
        token_key = request.COOKIES.get('auth_token')
        if token_key:
            try:
                token = Token.objects.get(key=token_key)
                token.delete()
            except Token.DoesNotExist:
                pass  # Token might already be deleted

        response = Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
        response.delete_cookie('auth_token')
        return response
class GoogleLoginView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        print("googlelogin1111")
        token = request.data.get('token')
        if not token:
            return Response({"error": "Token is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Verify Google token
        response = requests.get(f"https://www.googleapis.com/oauth2/v3/tokeninfo?id_token={token}")
        print("response",response)
        if response.status_code != 200:
            print("googlelogin1112")

            return Response({"error": "Invalid Google token"}, status=status.HTTP_401_UNAUTHORIZED)
        
        data = response.json()
        email = data.get('email')
        if not email:
            print("googlelogin1113")

            return Response({"error": "Email not provided by Google"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if choicecenter exists or create new
        try:
            choicecenter = ChoiceCenter.objects.get(email=email)
        except ChoiceCenter.DoesNotExist:
            choicecenter = ChoiceCenter(
                email=email,
                username=email.split('@')[0],
                password=make_password(os.urandom(16).hex())  # Random password for Google users
            )
            choicecenter.save()
        
        token, _ = Token.objects.get_or_create(choicecenter=choicecenter)
        return Response({"token": token.key}, status=status.HTTP_200_OK)

class ForgotPasswordView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        email = request.data.get('email')
        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            choicecenter = ChoiceCenter.objects(email=email.lower()).first()
            if not choicecenter:
                return Response({'error': 'choicecenter with this email does not exist'}, status=status.HTTP_404_NOT_FOUND)

            secret_key = settings.SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET
            if not secret_key:
                raise ValueError('SECRET_KEY is not set in environment variables')

            # Generate JWT token for password reset
            reset_token = jwt.encode(
                {"email": email, "exp": int(time.time()) + 3600},
                secret_key,
                algorithm='HS256'
            )

            # Construct reset link
            reset_link = f"http://localhost:5173/reset-password/{reset_token}"
            
            # Send email (configure email settings in settings.py)
            send_mail(
                subject='Password Reset Request',
                message=f'Click the link to reset your password: {reset_link}',
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[email],
                fail_silently=False,
            )

            return Response({'message': 'Password reset email sent'}, status=status.HTTP_200_OK)

        except ValueError as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            return Response({'error': 'Failed to send reset email'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class ResetPasswordView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        reset_token = request.data.get('token')
        new_password = request.data.get('password')
        print(reset_token,new_password)

        if not reset_token or not new_password:
            return Response(
                {'error': 'Reset token and new password are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            secret_key = settings.SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET
            if not secret_key:
                raise ValueError('SECRET_KEY is not set in environment variables')

            # Decode JWT token
            payload = jwt.decode(reset_token, secret_key, algorithms=['HS256'])
            email = payload['email']

            # Find user
            choicecenter = ChoiceCenter.objects(email=email.lower()).first()
            if not choicecenter:
                return Response(
                    {'error': 'choicecenter with this email does not exist'},
                    status=status.HTTP_404_NOT_FOUND
                )

            # Update password
            choicecenter.password = make_password(new_password)
            choicecenter.save()

            return Response(
                {'message': 'Password reset successfully'},
                status=status.HTTP_200_OK
            )

        except jwt.ExpiredSignatureError:
            return Response(
                {'error': 'Reset token has expired'},
                status=status.HTTP_400_BAD_REQUEST
            )
        except jwt.InvalidTokenError:
            return Response(
                {'error': 'Invalid reset token'},
                status=status.HTTP_400_BAD_REQUEST
            )
        except ValueError as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class UserProfileView(APIView):
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        user = ChoiceCenter.objects.get(id=request.user.id)
        serializer = ChoiceCenterSerializer(user)
        return Response(serializer.data)

    def put(self, request):
        user = ChoiceCenter.objects.get(id=request.user.id)
        serializer = ChoiceCenterSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
from django.views.decorators.csrf import ensure_csrf_cookie
from django.http import JsonResponse
from django.views.decorators.http import require_GET

@require_GET
@ensure_csrf_cookie
def csrf_view(request):
    return JsonResponse({"message": "CSRF cookie set"})

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
@authentication_classes([CookieTokenAuthentication])
@permission_classes([IsAuthenticated])
def get_current_user(request):
    return Response({
        'id': str(request.choicecenter.id),
        'email': request.choicecenter.email,
        'name': request.choicecenter.username,
    })
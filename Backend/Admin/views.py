from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Users
from core.utils import create_jwt
from core.authentication import JWTAuthentication
from core.permissions import role_required
from .serializers import UserSerializer

class LoginView(APIView):
    authentication_classes = []

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = Users.objects(email=email).first()
        if not user or not user.check_password(password):
            return Response({'detail': 'Invalid credentials'}, status=401)
        
        token = create_jwt(user)
        return Response({'access_token': token})

class ProtectedView(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        return Response({'message': f'Hello {request.user.email}'})

class AdminView(APIView):
    authentication_classes = [JWTAuthentication]

    @role_required(['admin'])
    def get(self, request):
        return Response({'message': f'Hello Admin {request.user.email}'})


from django.http import JsonResponse
from rest_framework.decorators import api_view
@api_view(['GET'])
def create_admin_user_view(request):
    """
    Creates an admin user if it doesn't exist using the UserSerializer.
    """
    email = "admin@admin.com"
    password = "admin123"

    # Check if user already exists
    user = Users.objects(email=email).first()
    if user:
        serializer = UserSerializer(user)
        return Response({
            "status": "exists",
            "message": f"User with email {email} already exists.",
            "user": serializer.data
        }, status=status.HTTP_200_OK)

    # Create new admin user
    admin_user_data = {
        "email": email,
        "roles": ['admin', 'user'],
        # Add other required fields here
    }

    serializer = UserSerializer(data=admin_user_data)
    if serializer.is_valid():
        admin_user = serializer.save()  # saves to DB
        admin_user.set_password(password)  # set hashed password
        admin_user.save()
        return Response({
            "status": "created",
            "message": f"Admin user {email} created successfully.",
            "user": UserSerializer(admin_user).data
        }, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
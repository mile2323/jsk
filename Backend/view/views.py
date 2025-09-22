from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ContactForms, FranchiseInquiry
from .serializers import ContactFormSerializer, FranchiseInquirySerializer
from core.authentication import JWTAuthentication


# ------------------------------ Contact Us ------------------------------
class ContactUsView(APIView):
    def get(self, request):
        
        user = JWTAuthentication().authenticate(request)
        if not user:
            return Response({'detail':'Authentication required'}, status=401)

        
        contact_details = ContactForms.objects.all()
        serializer = ContactFormSerializer(contact_details, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data
        serializer = ContactFormSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ------------------------------ Franchise Inquiry ------------------------------
class FranchiseInquiryView(APIView):
    
    def get(self, request):
        
        user = JWTAuthentication().authenticate(request)
        if not user:
            return Response({'detail':'Authentication required'}, status=401)
        
        franchise_details = FranchiseInquiry.objects.all()
        serializer = FranchiseInquirySerializer(franchise_details, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        data = request.data
        serializer = FranchiseInquirySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Create your views here.
import os
import re
from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import PlacementRegistration
from .serializers import PlacementRegistrationSerializer
import json


# Ensure upload folder exists
UPLOAD_DIR = os.path.join(settings.BASE_DIR, "Backend", "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)


def sanitize_filename(name: str) -> str:
    """Remove invalid filename characters and replace spaces with underscores."""
    return re.sub(r'[^a-zA-Z0-9_-]', '_', name.strip())

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import os, json
from .models import PlacementRegistration
from .serializers import PlacementRegistrationSerializer
from django.conf import settings
from core.authentication import JWTAuthentication

UPLOAD_DIR = os.path.join(settings.MEDIA_ROOT, "uploads")


class PlacementRegistrationList(APIView):
    def get(self, request):
        
        user = JWTAuthentication().authenticate(request)
        if not user:
            return Response({'detail':'Authentication required'}, status=401)
        registrations = PlacementRegistration.objects.all()
        serializer = PlacementRegistrationSerializer(registrations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        raw_data = request.data
        data = dict(raw_data)  # convert QueryDict to normal dict
        print("Received data:", raw_data)

        # Flatten single-value lists
        for key, value in data.items():
            if isinstance(value, list) and len(value) == 1:
                data[key] = value[0]

        # Parse education JSON
        if "education" in data and isinstance(data["education"], str):
            try:
                data["education"] = json.loads(data["education"])
            except Exception as e:
                return Response(
                    {"education": [f"Invalid JSON format: {str(e)}"]},
                    status=status.HTTP_400_BAD_REQUEST
                )

        # Handle file upload
        if "photo" in request.FILES:
            photo = request.FILES["photo"]
            ext = os.path.splitext(photo.name)[1]

            full_name = sanitize_filename(data.get("full_name", "unknown"))
            mobile_no = sanitize_filename(data.get("mobile_no", "nomobile"))
            filename = f"{full_name}_{mobile_no}{ext}"
            file_path = os.path.join(UPLOAD_DIR, filename)

            os.makedirs(UPLOAD_DIR, exist_ok=True)
            with open(file_path, "wb+") as dest:
                for chunk in photo.chunks():
                    dest.write(chunk)

            data["photo"] = f"uploads/{filename}"

        serializer = PlacementRegistrationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

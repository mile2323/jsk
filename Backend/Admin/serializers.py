from rest_framework_mongoengine.serializers import DocumentSerializer
from rest_framework import serializers
from .models import Users


class UserSerializer(DocumentSerializer):
    



    class Meta:
        model = Users
        fields = '__all__'


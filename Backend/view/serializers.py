from rest_framework_mongoengine.serializers import DocumentSerializer
from rest_framework import serializers
from .models import ContactForms,FranchiseInquiry


class ContactFormSerializer(DocumentSerializer):
    email = serializers.EmailField(required=False)
   
    class Meta:
        model = ContactForms
        fields = '__all__'


class FranchiseInquirySerializer(DocumentSerializer):
   
    class Meta:
        model = FranchiseInquiry
        fields = '__all__'

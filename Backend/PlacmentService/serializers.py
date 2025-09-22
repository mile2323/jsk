from rest_framework_mongoengine.serializers import DocumentSerializer
from rest_framework import serializers
from .models import PlacementRegistration


class PlacementRegistrationSerializer(DocumentSerializer):
    email = serializers.EmailField(allow_blank=True, required=False)
    permanent_address = serializers.CharField(allow_blank=True, required=False)
    residential_address = serializers.CharField(allow_blank=True, required=False)
    photo = serializers.CharField(allow_blank=True, required=False)
    skills_description = serializers.CharField(allow_blank=True, required=False)
    education = serializers.ListField(child=serializers.DictField(), required=False)
    date_of_birth = serializers.DateField(required=False, allow_null=True)
    age = serializers.CharField(allow_blank=True, required=False)
    mobile_no = serializers.CharField(allow_blank=True, required=False)
    father_name = serializers.CharField(allow_blank=True, required=False)
    mother_name = serializers.CharField(allow_blank=True, required=False)
    marital_status = serializers.ChoiceField(choices=["single", "married"], required=False)
    post_applied_for = serializers.CharField(allow_blank=True, required=False)
    full_name = serializers.CharField(allow_blank=True, required=False)



    class Meta:
        model = PlacementRegistration
        fields = '__all__'

    def validate_email(self, value):
        return None if value == "" else value

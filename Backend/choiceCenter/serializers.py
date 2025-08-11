from rest_framework import serializers
from rest_framework_mongoengine.serializers import DocumentSerializer
from choiceCenter.models import ChoiceCenter,Token
from django.contrib.auth.hashers import make_password

class ChoiceCenterSerializer(DocumentSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    
    
    class Meta:
        model = ChoiceCenter
        fields = '__all__'
    def validate(self, data):
        # Check if username already exists, excluding the current instance (if updating)
        username = data.get('username')
        query = ChoiceCenter.objects(username=username)
        if self.instance:
            query = query.filter(_id__ne=self.instance._id)
        if query.count():
            raise serializers.ValidationError({'username': 'This username is already taken.'})

        # Check if email already exists, excluding the current instance (if updating)
        email = data.get('email')
        query = ChoiceCenter.objects(email=email.lower())
        if self.instance:
            query = query.filter(_id__ne=self.instance._id)
        if query.count():
            raise serializers.ValidationError({'email': 'This email is already registered.'})

        return data

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        validated_data['email'] = validated_data['email'].lower()
        return ChoiceCenter(**validated_data).save()

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email).lower()
        if 'password' in validated_data:
            instance.password = make_password(validated_data['password'])
        instance.save()
        return instance

class TokenSerializer(serializers.Serializer):
    key = serializers.CharField(max_length=40, read_only=True)
    user = ChoiceCenterSerializer(read_only=True)

    def create(self, validated_data):
        user = validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return token
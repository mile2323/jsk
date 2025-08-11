# authentication.py
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from .models import Token  # MongoEngine Token
from mongoengine.errors import DoesNotExist

class CookieTokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token_key = request.COOKIES.get('auth_token')
        if not token_key:
            return None  # No token in cookie — DRF will try other auth methods

        try:
            token = Token.objects.get(key=token_key)  # MongoEngine query
            return (token.user, None)  # DRF expects a tuple: (user, auth)
        except Token.DoesNotExist:
            raise AuthenticationFailed('Invalid or expired token')

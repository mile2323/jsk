from rest_framework.authentication import BaseAuthentication
from rest_framework import exceptions
from Admin.models import Users
from .utils import decode_jwt

class JWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return None

        token = auth_header.split(' ')[1]
        payload = decode_jwt(token)
        if not payload:
            raise exceptions.AuthenticationFailed('Invalid or expired token')

        user = Users.objects(id=payload['user_id']).first()
        if not user:
            raise exceptions.AuthenticationFailed('User not found')

        request.user_payload = payload  # store payload for role checks
        return (user, None)

import jwt, datetime
from django.conf import settings

def create_jwt(user, expires_minutes=60):
    payload = {
        'user_id': str(user.id),
        'email': user.email,
        'roles': user.roles,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=expires_minutes),
        'type': 'access'
    }
    token = jwt.encode(payload, settings.JWT_SECRET, algorithm='HS256')
    return token

def decode_jwt(token):
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

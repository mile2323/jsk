from rest_framework.response import Response
from functools import wraps

def role_required(allowed_roles):
    def decorator(view_func):
        @wraps(view_func)
        def _wrapped(request, *args, **kwargs):
            user_roles = getattr(request.user_payload, 'roles', None)
            if not user_roles or not any(role in allowed_roles for role in user_roles):
                return Response({'detail':'Permission denied'}, status=403)
            return view_func(request, *args, **kwargs)
        return _wrapped
    return decorator

from django.urls import path
from .controller.loginLogoutController import LogoutView, RegisterView, LoginView, GoogleLoginView, ForgotPasswordView, ResetPasswordView, UserProfileView,csrf_view,get_current_user

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('google-login/', GoogleLoginView.as_view(), name='google-login'),
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot-password'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('csrf/', csrf_view),
    path('get-user/', get_current_user),
]
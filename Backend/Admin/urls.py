from django.urls import path
from .views import create_admin_user_view,LoginView

urlpatterns = [
    path("login/", LoginView.as_view(), name="admin_login"),
    path("create-admin/", create_admin_user_view, name="create_admin_user"),
]

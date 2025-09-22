from django.urls import path
from .views import PlacementRegistrationList

urlpatterns = [
    path("registrations/", PlacementRegistrationList.as_view(), name="placement-registration"),
]

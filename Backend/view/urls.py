from django.urls import path
from .views import ContactUsView, FranchiseInquiryView

urlpatterns = [
    path('contact-us/', ContactUsView.as_view(), name='contact-us'),
    path('franchise-inquiry/', FranchiseInquiryView.as_view(), name='franchise-inquiry'),
]

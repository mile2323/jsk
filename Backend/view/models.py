from mongoengine import (
    Document, StringField, IntField, EmailField,
    DateField, ListField, DictField, DateTimeField
)
from core.models import BaseDocument


class ContactForms(BaseDocument):
    name = StringField()
    mobile_no = StringField(required=True,max_length=10)
    email = EmailField()
    message = StringField(required=True)

    meta = {
        "collection": "contact_forms"
    }



class FranchiseInquiry(BaseDocument):
    services = ListField(StringField())
    name = StringField()
    mobile = StringField(required=True,max_length=10)
    email = EmailField()
    companyName = StringField()
    address = StringField() 
    message = StringField()
     

    meta = {
        "collection": "franchise_inquiries"
    }
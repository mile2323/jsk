from mongoengine import Document, StringField, EmailField, ListField
from django.contrib.auth.hashers import make_password, check_password
from core.models import BaseDocument

class Users(BaseDocument):
    email = EmailField(required=True, unique=True)
    password_hash = StringField(required=True)
    roles = ListField(StringField(), default=['user'])  # example: ['admin', 'user']

    def set_password(self, raw):
        self.password_hash = make_password(raw)
        self.save()

    def check_password(self, raw):
        return check_password(raw, self.password_hash)

from mongoengine import Document, StringField, EmailField, BooleanField, FileField,ReferenceField

class ChoiceCenter(Document):
    ChoiceCenterName = StringField(max_length=150, unique=True, required=True)
    email = EmailField(max_length=255, unique=True, required=True)
    owner_name = StringField(max_length=255)
    address = StringField(max_length=500)
    mobileNo = StringField(max_length=15)
    is_active = BooleanField(default=True)
    isSuperAdmin = BooleanField(default=False)
    password = StringField(max_length=255, required=True)

    USERNAME_FIELD = 'email'

    meta = {
        'collection': 'ChoiceCenterName',
    }

    def __str__(self):
        return self.email
    @property
    def is_authenticated(self):
        return True


class Token(Document):
    key = StringField(max_length=40, unique=True)
    choicecenter = ReferenceField(ChoiceCenter, required=True)

    def generate_key(self):
        import secrets
        return secrets.token_hex(20)  # Generates a 40-character hex string

    def save(self, *args, **kwargs):
        if not self.key:
            self.key = self.generate_key()
        super().save(*args, **kwargs)

    meta = {
        'collection': 'tokens'
    }
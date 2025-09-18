from mongoengine import (
    Document, StringField, IntField, EmailField,
    DateField, ListField, DictField, DateTimeField
)
import datetime


class PlacementRegistration(Document):
    # Photo (store path/URL as string)
    photo = StringField()

    # Basic Information
    post_applied_for = StringField()
    full_name = StringField()

    # Family Information
    father_name = StringField()
    mother_name = StringField()

    # Personal Details
    date_of_birth = DateField()
    age = StringField()
    mobile_no = StringField()
    email = EmailField()
    marital_status = StringField(choices=("single", "married"))

    # Address
    residential_address = StringField()
    permanent_address = StringField()

    # Education (list of dictionaries instead of separate class)
    education = ListField(DictField())

    # Professional Experience / Skills
    skills_description = StringField()

    # Declaration
    place = StringField()
    

    # Auto timestamps
    created_at = DateTimeField(default=datetime.datetime.utcnow)

    meta = {
        "collection": "placement_registrations"
    }

from mongoengine import (
    Document, StringField, IntField, EmailField,
    DateField, ListField, DictField, DateTimeField
)
import datetime
from  view.models import BaseDocument


class PlacementRegistration(BaseDocument):
    # Photo (store path/URL as string)
    photo = StringField(required=False)

    # Basic Information
    post_applied_for = StringField(required=False)
    full_name = StringField(required=False)

    # Family Information
    father_name = StringField(required=False)
    mother_name = StringField(required=False)

    # Personal Details
    date_of_birth = DateField(required=False)
    age = StringField(required=False)
    mobile_no = StringField(required=False)
    email = EmailField(required=False)
    marital_status = StringField(choices=("single", "married"),default="single", required=False)

    # Address
    residential_address = StringField(required=False)
    permanent_address = StringField(required=False)

    # Education (list of dictionaries instead of separate class)
    education = ListField(DictField(required=False))

    # Professional Experience / Skills
    skills_description = StringField(required=False)

    # # Declaration
    # place = StringField()
    

    # Auto timestamps
    created_at = DateTimeField(default=datetime.datetime.now)

    meta = {
        "collection": "placement_registrations"
    }

from django.db import models

from django.contrib.auth import get_user_model
from django.db import models
from cloudinary.models import CloudinaryField


User = get_user_model()


class Item(models.Model):
    status = models.CharField(
        max_length=15, db_index=True, default='inactive')
    name = models.CharField('Name', max_length=120, db_index=True)
    price = models.IntegerField('Price')
    image = CloudinaryField('image', blank=True, null=True)
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )

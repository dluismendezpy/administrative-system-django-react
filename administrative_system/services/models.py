# Django
from django.db import models

# Owns
from users.models import BaseModel, User


class Service(BaseModel):
    """Service model"""
    is_active = models.BooleanField(default=True)


class Board(BaseModel):
    """Board model to store all services"""
    user = models.ManyToManyField(User)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name="service")
    is_active = models.BooleanField(default=True)

# Django
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
    """Manager for user model"""
    def create_user(self, username, email, password=None):
        if username is None:
            raise TypeError("You must have an Username")
        if email is None:
            raise TypeError("You must have an Email")

        user = self.model(
            username=username,
            email=self.normalize_email(email),
        )
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, username, email, password=None):
        if password is None:
            raise TypeError("You need to include a password")

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save()

        return user


class BaseModel(models.Model):
    """Base model for others models"""
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract=True

    def __str__(self) -> str:
        return self.name


class City(BaseModel):
    """City model"""
    postal_code = models.CharField(max_length=50, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Cities"


class User(AbstractBaseUser, PermissionsMixin):
    """Model for users"""

    class Gender(models.TextChoices):
        """Gender Choices"""
        MALE = "Male"
        FEMALE = "Female"
        NON_BINARY = "Non-Binary"

    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=200, null=True, blank=True)
    identification = models.CharField(max_length=100, help_text="Provides an identification number")
    gender = models.CharField(max_length=10, choices=Gender.choices, default=Gender.MALE)
    date_of_birth = models.DateField(null=True, blank=True)
    is_latino = models.BooleanField(default=False)
    phone = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ("username",)

    objects = UserManager()

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"

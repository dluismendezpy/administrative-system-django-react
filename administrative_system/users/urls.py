# Django
from django.urls import path

# Owns
from . import views

urlpatterns = [
    path("signup/", views.SignUpView.as_view(), name="signup_view"),
]

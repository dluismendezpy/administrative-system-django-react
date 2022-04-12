# Django
from django.urls import path

# Owns
from . import views

urlpatterns = [
    path("signup/", views.SignUpView.as_view(), name="signup_view"),
    path("login/", views.LoginView.as_view(), name="login_view"),
    path("logout/", views.LogoutView.as_view(), name="logout_views"),
    path("auth/", views.AuthView.as_view(), name="auth_view"),
]

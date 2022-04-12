# Rest Framework
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

# Owns
from .models import User


class UserSerializer(serializers.ModelSerializer):
    """Serializer for User model"""
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ("email", "username", "password")

    def validate(self, attrs):
        email = attrs.get("email", "")
        username = attrs.get("username", "")

        if not username.isalnum():
            raise serializers.ValidationError("Username should be alphanumerics characters")

        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)

        return user


class LoginSerializer(serializers.ModelSerializer):
    """Serializer for login"""
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ("username", "email", "password", "token")
        read_only_fields = ("token",)


class LogoutSerializer(serializers.ModelSerializer):
    """Serializer for logout"""
    refresh = serializers.CharField()

    default_error_messages = {
        "bad_token": "Token is invalid or expired!"
    }

    def validate(self, attrs):
        self.token = attrs["refresh"]

        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail("Token Invalid!")

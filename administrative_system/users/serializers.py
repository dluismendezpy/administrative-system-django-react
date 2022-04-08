# Rest Framework
from rest_framework import serializers

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
        return User.objects.create_user(**validated_data)

        return super().validate(attrs)

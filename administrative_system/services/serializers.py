# Rest Framework
from rest_framework import serializers

# Owns
from .models import Board, Service


class ServiceSerializer(serializers.ModelSerializer):
    """Serializer for Service model"""
    class Meta:
        model = Service
        fields = "__all__"


class BoardSerializer(serializers.ModelSerializer):
    """Serializer for Board model"""
    class Meta:
        model = Board
        fields = "__all__"

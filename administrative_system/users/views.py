# Django
from django.shortcuts import render

# Rest Framework
from rest_framework import generics, status
from rest_framework.response import Response

# Owns
from .serializers import UserSerializer


class SignUpView(generics.GenericAPIView):
    """View for users registration"""
    serializer_class = UserSerializer

    def post(self, request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        user_data = serializer.data

        return Response(user_data, status=status.HTTP_201_CREATED)

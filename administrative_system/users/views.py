# Django
from django.contrib.auth import authenticate

# Rest Framework
from rest_framework import generics, status, response, permissions

# Owns
from .serializers import UserSerializer, LoginSerializer
from .jwt_helpers import JWTAuthentication


class AuthView(generics.GenericAPIView):
    """View for authentication"""
    authentication_classes = (JWTAuthentication, )
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return response.Response({"user": serializer.data})


class SignUpView(generics.GenericAPIView):
    """View for users registration"""
    serializer_class = UserSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return response.Response(serializer.data, status=status.HTTP_201_CREATED)

        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(generics.GenericAPIView):
    """View for users login"""
    serializer_class = LoginSerializer

    def post(self, request):
        email = request.data.get("email", None)
        password = request.data.get("password", None)
        user = authenticate(username=email, password=password)

        if user:
            serializer = self.serializer_class(user)

            return response.Response(serializer.data, status=status.HTTP_200_OK)

        return response.Response(
            {"message": "Invalid username or password. Try again!"},
            status=status.HTTP_401_UNAUTHORIZED
        )

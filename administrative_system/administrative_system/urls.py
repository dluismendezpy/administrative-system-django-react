# Django
from django.contrib import admin
from django.urls import path, include

# Rest Framework
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path("users/", include("users.urls")),
    path("services/", include("services.urls")),
    path("auth/", obtain_auth_token)
]

admin.site.site_header = "MS Mendez Services"
admin.site.site_title = "Welcome"
admin.site.index_title = "MS Mendez Services"

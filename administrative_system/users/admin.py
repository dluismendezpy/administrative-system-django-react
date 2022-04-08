# Ownss
from django.contrib import admin

# Owns
from .models import User, City


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    """class for User admin"""
    fields = (
        "first_name",
        "last_name",
        "email",
        "is_latino",
        "gender",
    )
    list_display = (
        "first_name",
        "last_name",
        "email",
        "is_active",
        "is_latino",
        "gender",
    )
    list_display_links = (
        "first_name",
    )
    readonly_fields = (
        "created_at",
    )
    ordering = (
        "-created_at",
    )


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    """class for City model"""
    fields = (
        "name",
        "created_at",
    )
    list_display = (
        "name",
        "created_at",
    )
    list_display_links = (
        "name",
    )
    readonly_fields = (
        "created_at",
    )
    ordering = (
        "-created_at",
    )

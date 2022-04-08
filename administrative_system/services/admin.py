# Django
from django.contrib import admin

# Owns
from .models import Service, Board


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    """Admin for Service model"""
    fields = (
        "name",
        "is_active",
        "created_at",
    )
    list_display = (
        "name",
        "is_active",
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


@admin.register(Board)
class BoardAdmin(admin.ModelAdmin):
    """Admin for Board model"""
    fields = (
        "name",
        "user",
        "service",
        "is_active",
        "created_at",
    )
    list_display = (
        "name",
        "is_active",
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

# Ownss
from django.contrib import admin

# Owns
from .models import User, City


@admin.action(description='Mark selected users as staff')
def make_users_staff(modeladmin, request, queryset):
    queryset.update(is_staff=True)


@admin.action(description='Mark selected users as non-staff')
def make_users_non_staff(modeladmin, request, queryset):
    queryset.update(is_staff=False)


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    """class for User admin"""
    fields = (
        "first_name",
        "last_name",
        "email",
        "username",
        "identification",
        "gender",
        "date_of_birth",
        "is_latino",
        "is_staff",
        "phone",
        "created_at",
    )
    list_display = (
        "full_name",
        "email",
        "is_active"
    )
    list_display_links = (
        "full_name",
        "email"
    )
    list_filter = (
        "is_staff",
        "created_at"
    )
    readonly_fields = (
        "created_at",
    )
    ordering = (
        "-created_at",
    )
    actions = (
        make_users_staff,
        make_users_non_staff
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

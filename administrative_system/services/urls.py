# Django
from django.urls import path

# Owns
from . import views

urlpatterns = [
    path("service-overview/", views.api_service_overview, name="api_service_overview"),
    path("board-overview/", views.api_board_overview, name="api_service_overview"),
    path("service-list/", views.service_list, name="service_list"),
    path("board-list/", views.board_list, name="board_list"),
    path("serive-create/", views.service_create, name="service_create"),
    path("board-create/", views.board_create, name="board_create"),
    path("service-detail/<str:pk>/", views.service_detail, name="service_detail"),
    path("board-detail/<str:pk>/", views.board_detail, name="board_detail"),
    path("service-update/<str:pk>/", views.service_update, name="service_update"),
    path("board-update/<str:pk>/", views.board_update, name="board_update"),
    path("service-delete/<str:pk>/", views.service_delete, name="service_delete"),
    path("board-delete/<str:pk>/", views.board_delete, name="board_delete")
]

# Django Rest Framework
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Owns
from .models import Board, Service
from .serializers import BoardSerializer, ServiceSerializer


# Service block API
@api_view(["GET"])
def api_service_overview(request):
    api_urls = {
        "List": "/service-list/",
        "Create": "/service-create/",
        "Detail": "/service-detail/<str:pk>",
        "Update": "/service-update/<str:pk>",
        "Delete": "/service-delete/<str:pk>",
    }

    return Response(api_urls)


@api_view(["GET"])
def service_list(request):
    service = Service.objects.all().order_by("-id")
    serializer = ServiceSerializer(service, many=True)

    return Response(serializer.data)


@api_view(["GET"])
def service_detail(response, pk):
    service = Service.objects.get(id=pk)
    serializer = ServiceSerializer(service, many=False)

    return Response(serializer.data)


@api_view(["POST"])
def service_create(request):
    serializer = ServiceSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["POST"])
def service_update(request, pk):
    service = Service.objects.get(id=pk)
    serializer = ServiceSerializer(instance=service, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["DELETE"])
def service_delete(request, pk):
    task = Service.objects.get(id=pk)
    task.delete()

    return Response("Service successfully deleted!")


# board block API
@api_view(["GET"])
def api_board_overview(request):
    api_urls = {
        "List": "/board-list/",
        "Create": "/board-create/",
        "Detail": "/board-detail/<str:pk>",
        "Update": "/board-update/<str:pk>",
        "Delete": "/board-delete/<str:pk>",
    }

    return Response(api_urls)


@api_view(["GET"])
def board_list(request):
    board = Board.objects.all().order_by("-id")
    serializer = ServiceSerializer(board, many=True)

    return Response(serializer.data)


@api_view(["GET"])
def board_detail(response, pk):
    board = Board.objects.get(id=pk)
    serializer = ServiceSerializer(board, many=False)

    return Response(serializer.data)


@api_view(["POST"])
def board_create(request):
    serializer = ServiceSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["POST"])
def board_update(request, pk):
    board = Board.objects.get(id=pk)
    serializer = ServiceSerializer(instance=board, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(["DELETE"])
def board_delete(request, pk):
    board = Board.objects.get(id=pk)
    board.delete()

    return Response("Board successfully deleted!")

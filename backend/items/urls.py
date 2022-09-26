from django.urls import path, include
from .views import ItemView
from rest_framework import routers

route = routers.DefaultRouter()
route.register("", ItemView, basename="itemview")

urlpatterns = [
    path('', include(route.urls))
]

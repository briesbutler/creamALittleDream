from rest_framework import generics, viewsets
from .serializers import ItemSerializer
from .models import Item


class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.order_by('created_at').all()
    serializer_class = ItemSerializer


class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('id').all()
    serializer_class = ItemSerializer

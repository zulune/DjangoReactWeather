from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Country, CityZip

from .serializer import CountrySerializer, CityZipSerializer

# Create your views here.

class CountryListView(generics.ListAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class CityZipListView(generics.ListAPIView):
    queryset = CityZip.objects.all()
    serializer_class = CityZipSerializer
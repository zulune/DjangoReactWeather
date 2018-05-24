from django.urls import path

from .views import CountryListView, CityZipListView

app_name = 'weather-api'

urlpatterns = [
    path('country', CountryListView.as_view(), name='country-list'),
    path('code', CityZipListView.as_view(), name='city-list'),
]
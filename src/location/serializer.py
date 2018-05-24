from rest_framework import serializers

from .models import Country, CityZip
# You`r serializer here

class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ['pk', 'name', ]

class CityZipSerializer(serializers.ModelSerializer):
    class Meta:
        model = CityZip
        fields = ['pk', 'country', 'name', 'zip', ]
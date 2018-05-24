from django.contrib import admin

from location.models import Country, CityZip
# Register your models here.

@admin.register(Country)
class AdminCountry(admin.ModelAdmin):
    pass

@admin.register(CityZip)
class CityZipAdmin(admin.ModelAdmin):
    pass
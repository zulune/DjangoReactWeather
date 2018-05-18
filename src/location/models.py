from django.db import models

# Create your models here.

class CityZip(models.Model):
    zip = models.PositiveIntegerField(max_length=100, unique=True)

    def __str__(self):
        return self.zip
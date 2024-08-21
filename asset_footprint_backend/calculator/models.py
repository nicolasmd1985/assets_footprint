from django.db import models

# Create your models here.
class UsageHistory(models.Model):
    month = models.CharField(max_length=20)
    water_usage = models.FloatField()
    energy_usage = models.FloatField()

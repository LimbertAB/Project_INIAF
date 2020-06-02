from django.db import models
# Create your models here.
class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, blank=False, null=False)
    apellido = models.CharField(max_length=200, blank=False, null=False)
    ci = models.IntegerField(null=False)
    password = models.CharField(max_length=200, blank=False, null=False)
    estado = models.BooleanField(default=True)
from django.db import models
# Create your models here.
class Programa(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=900, blank=False, null=False)
    proyecto = models.CharField(max_length=900, blank=False, null=False)
    actividad = models.CharField(max_length=500, blank=False, null=False)
    id_partida = models.IntegerField(null=False)
    descripcion = models.CharField(max_length=900, blank=False, null=False)
    estado = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

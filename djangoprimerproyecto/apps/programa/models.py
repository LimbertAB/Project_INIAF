from django.db import models
from apps.partida.models import Partida

class Programa(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=900, blank=False, null=False)
    proyecto = models.CharField(max_length=900, blank=False, null=False)
    actividad = models.CharField(max_length=500, blank=False, null=False)
    descripcion = models.CharField(max_length=900, blank=False, null=False)
    estado = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    id_partida = models.ForeignKey(Partida, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

    class Meta:
        ordering = ['nombre']

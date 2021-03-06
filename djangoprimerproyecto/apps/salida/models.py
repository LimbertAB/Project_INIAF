from django.db import models
from apps.usuario.models import Usuario

class Salida(models.Model):
    id = models.AutoField(primary_key=True)
    fecha_salida = models.DateTimeField(blank=False, null=False)
    fecha_retorno = models.DateTimeField(blank=False, null=False)
    tiempo = models.CharField(max_length=200, blank=False, null=False)
    motivo = models.CharField(max_length=900, blank=False, null=False)
    estado = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
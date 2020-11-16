from django.db import models
from apps.usuario.models import Usuario

class Asistencia(models.Model):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(blank=False,max_length=500, null=False, default=0)
    archivo = models.CharField(blank=False,max_length=50, null=False)
    descripcion = models.CharField(max_length=900, blank=False, null=False)
    estado = models.BooleanField(default=True)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)


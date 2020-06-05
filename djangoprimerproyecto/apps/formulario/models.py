from django.db import models
from apps.movilidad.models import Movilidad
from apps.programa.models import Programa
from apps.usuario.models import Usuario

class Formulario(models.Model):
    id = models.AutoField(primary_key=True)
    fecha = models.DateTimeField(blank=False, null=False)
    descripcion = models.CharField(max_length=999, blank=False, null=False)
    lugar = models.CharField(max_length=900, blank=False, null=False)
    fecha_salida = models.DateTimeField(blank=False, null=False)
    fecha_llegada = models.DateTimeField(blank=False, null=False)
    precio_unitario = models.FloatField(blank=False, null=False)
    precio_cantidad = models.FloatField(blank=False, null=False)
    precio_total = models.FloatField(blank=False, null=False)
    numero_memo = models.IntegerField(blank=False, null=False)
    estado = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    id_movilidad = models.ForeignKey(Movilidad, on_delete=models.CASCADE)
    id_programa = models.ForeignKey(Programa, null=True, on_delete=models.CASCADE)
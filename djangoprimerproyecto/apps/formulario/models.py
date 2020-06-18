from django.db import models
from apps.movilidad.models import Movilidad
from apps.programa.models import Programa
from apps.usuario.models import Usuario
from apps.partida.models import Partida

class Formulario(models.Model):
    id = models.AutoField(primary_key=True)
    numero = models.IntegerField(blank=False, null=False, default=0)
    fecha = models.DateTimeField(blank=False, null=False)
    descripcion = models.CharField(max_length=999, blank=False, null=False)
    lugar = models.CharField(max_length=900, blank=False, null=False)
    fecha_salida = models.DateTimeField(blank=False, null=False)
    fecha_llegada = models.DateTimeField(blank=False, null=False)
    kilometraje = models.IntegerField(blank=False, null=False, default=0)
    combustible = models.IntegerField(blank=False, null=False, default=0)
    kilometraje_viaje = models.IntegerField(blank=False, null=False, default=0)
    numero_memo = models.IntegerField(blank=False, null=False, default=0)
    resolucion_administrativa = models.IntegerField(blank=False, null=False, default=0)
    observacion = models.CharField(max_length=999, blank=False, null=False, default="sin observacion")
    estado = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    id_movilidad = models.ForeignKey(Movilidad, on_delete=models.CASCADE, default=1)
    id_programa = models.ForeignKey(Programa, null=True, on_delete=models.CASCADE)

class Formulario_Recurso(models.Model):
    id = models.AutoField(primary_key=True)
    id_formulario = models.ForeignKey(Formulario, on_delete=models.CASCADE)
    id_partida = models.ForeignKey(Partida, on_delete=models.CASCADE)
    precio_unitario = models.FloatField(blank=False, null=False)
    cantidad = models.FloatField(blank=False, null=False)
    unidad = models.CharField(max_length=50, blank=False, null=False)
    unidad_liquidacion = models.CharField(max_length=50,blank=False, null=False)

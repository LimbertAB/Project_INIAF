from django.db import models
# Create your models here.
class Partida(models.Model):
    id = models.AutoField(primary_key=True)
    fuente = models.CharField(max_length=100, blank=False, null=False)
    numero = models.IntegerField(null=False)
    glosa_uno = models.CharField(max_length=200, blank=False, null=False)
    glosa_dos = models.CharField(max_length=200, blank=False, null=False)
    unidad = models.CharField(max_length=200, blank=False, null=False)
    estado = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
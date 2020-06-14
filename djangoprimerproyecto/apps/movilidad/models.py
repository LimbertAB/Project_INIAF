from django.db import models
# Create your models here.
class Movilidad(models.Model):
    id = models.AutoField(primary_key=True)
    marca = models.CharField(max_length=100, blank=False, null=False)
    modelo = models.CharField(max_length=200, blank=False, null=False)
    tipo = models.CharField(max_length=200, blank=False, null=False)
    placa = models.CharField(max_length=200, blank=False, null=False)
    rendimiento = models.CharField(max_length=200, blank=False, null=False)
    estado = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.marca
 
    class Meta:
        ordering = ['marca']

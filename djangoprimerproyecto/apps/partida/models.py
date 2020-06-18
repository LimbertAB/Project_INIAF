from django.db import models
from apps.programa.models import Programa

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
    id_programa = models.ForeignKey(Programa, on_delete=models.CASCADE,default=1)
    def __str__(self):
        return self.numero

    class Meta:
        ordering = ['numero']

    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     self.fields['id_´programa'].queryset =
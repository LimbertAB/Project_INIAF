from django.db import models
from apps.usuario.models import Usuario

class Mensaje(models.Model):
    id = models.AutoField(primary_key=True) 
    asunto = models.CharField(max_length=900, blank=False, null=False)
    cuerpo = models.FileField(upload_to="documentos",null=True)
    receptor = models.CharField(max_length=900, blank=False, null=False)
    estado = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, default="")
    
 
from django.urls import path
from apps.usuario.views import crearUsuario, listarUsuario

urlpatterns = [
    path('crear_usuario/', crearUsuario, name='crear_usuario'),
    path('', listarUsuario, name='listar_usuario')
]
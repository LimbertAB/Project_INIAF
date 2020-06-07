from django.urls import path
from apps.usuario.views import crearUsuario, listarUsuario
from apps.usuario.class_view import UsuarioUpdate,UsuarioList

app_name = 'usuario'

urlpatterns = [
    path('', UsuarioList.as_view(), name='listar'),
    #path('crear_usuario/', crearUsuario, name='crear'),
    path('modificar/<int:pk>/', UsuarioUpdate.as_view(), name='modificar')


]

#localhost:8000/usuario/
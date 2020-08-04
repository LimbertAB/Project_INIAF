from django.urls import path
from apps.usuario.views import UsuarioUpdate,UsuarioList,UsuarioCreate,ListUsuario

app_name = 'usuario'

urlpatterns = [ 
    path('', UsuarioList.as_view(), name='listar'),
    path('crear_usuario/', UsuarioCreate.as_view(), name='crear'),
    path('modificar/<int:pk>/', UsuarioUpdate.as_view(), name='modificar'),
    path('obtenerusuario/', ListUsuario.as_view(), name='obtener')
]
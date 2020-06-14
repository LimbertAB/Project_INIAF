from django.urls import path
from apps.movilidad.views import MovilidadUpdate,MovilidadList,MovilidadCreate

app_name = 'movilidad'

urlpatterns = [ 
    path('', MovilidadList.as_view(), name='listar'),
    #path('crear_usuario/', crearUsuario, name='crear'),
    path('crear_movilidad/', MovilidadCreate.as_view(), name='crear'),
    path('modificar/<int:pk>/', MovilidadUpdate.as_view(), name='modificar')


]

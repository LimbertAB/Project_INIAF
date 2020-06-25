from django.urls import path
from apps.partida.views import PartidaUpdate,PartidaList,PartidaCreate,PartidaDetailView

app_name = 'partida'

urlpatterns = [ 
    path('', PartidaList.as_view(), name='listar'),
    path('listar/<int:pk>/', PartidaDetailView.as_view(), name='lista_partida'),
    path('crear_partida/', PartidaCreate.as_view(), name='crear'),
    path('modificar/<int:pk>/', PartidaUpdate.as_view(), name='modificar'),


]
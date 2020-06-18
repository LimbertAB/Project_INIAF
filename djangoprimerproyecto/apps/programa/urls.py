from django.urls import path
from apps.programa.views import ProgramaUpdate,ProgramaList,ProgramaCreate,ProgramaDetailView

app_name = 'programa'

urlpatterns = [ 
    path('', ProgramaList.as_view(), name='listar'),
    path('listar/<int:pk>/', ProgramaDetailView.as_view(), name='lista_programa'),
    path('crear_programa/', ProgramaCreate.as_view(), name='crear'),
    path('modificar/<int:pk>/', ProgramaUpdate.as_view(), name='modificar')


]
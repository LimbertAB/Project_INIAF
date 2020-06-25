from django.urls import path
from apps.formulario.views import FormularioDetailView,FormularioList, FormularioCreate,OBTNER_PARTIDAS

app_name = 'formulario'

urlpatterns = [ 
    path('', FormularioList.as_view(), name='listar'),
    path('crear_formulario/', FormularioCreate.as_view(), name='crear'),
    path('consultar/',OBTNER_PARTIDAS.as_view(), name='consultar'),
    path('ver/<int:pk>/',FormularioDetailView.as_view(), name='ver'),
]
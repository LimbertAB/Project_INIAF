from django.urls import path
from apps.formulario.views import FormularioDetailView,FormularioList, FormularioCreate,FormularioPartidaList,FormularioUpdate,FormularioNotificaciones

app_name = 'formulario'

urlpatterns = [ 
    path('', FormularioList.as_view(), name='listar'),
    path('crear_formulario/', FormularioCreate.as_view(), name='crear'),
    path('consultar/',FormularioPartidaList.as_view(), name='consultar'),
    path('ver/<int:pk>/',FormularioDetailView.as_view(), name='ver'),
    path('modificar/<int:pk>/', FormularioUpdate.as_view(), name='modificar'),
    path('notificaciones/',FormularioNotificaciones.as_view(), name='notificaciones'),

]
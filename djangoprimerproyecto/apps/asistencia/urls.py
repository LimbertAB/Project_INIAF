from django.urls import path
from apps.asistencia.views import AsistenciaList,AsistenciaCreate

app_name = 'asistencia'

urlpatterns = [ 
    # path('', MyAsistenciaList.as_view(), name='listar'),
    path('', AsistenciaList.as_view(), name='listar'),
    path('crear/', AsistenciaCreate.as_view(), name='crear'),
    # path('consultar/',AsistenciaPartidaList.as_view(), name='consultar'),
    # path('ver/<int:pk>/',AsistenciaDetailView.as_view(), name='ver'),
    # path('modificar/<int:pk>/', AsistenciaUpdate.as_view(), name='modificar'),

]
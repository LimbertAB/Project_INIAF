from django.urls import path
from apps.asistencia.views import AsistenciaList,AsistenciaCreate,Asistencia_List_Usuarios_DetailView,Asistencia_List_horas_DetailView

app_name = 'asistencia'

urlpatterns = [ 
    # path('', MyAsistenciaList.as_view(), name='listar'),
    path('', AsistenciaList.as_view(), name='listar'),
    path('crear/', AsistenciaCreate.as_view(), name='crear'),
    # path('consultar/',AsistenciaPartidaList.as_view(), name='consultar'),
    path('verusuario/<int:pk>/',Asistencia_List_Usuarios_DetailView.as_view(), name='verusuario'),
    path('verhora/<int:pk>/',Asistencia_List_horas_DetailView.as_view(), name='verhora'),
    # path('modificar/<int:pk>/', AsistenciaUpdate.as_view(), name='modificar'),

]
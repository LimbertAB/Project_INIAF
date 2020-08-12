from django.urls import path
from apps.mensaje.views import MensajeList,FormularioNotificaciones,MensajeCreate, MensajeDelete, MensajeUpdate

app_name = 'mensaje'

urlpatterns = [ 
    path('', MensajeList.as_view(), name='listar'),
    path('guardar/', MensajeCreate.as_view(), name='guardar'),
    path('notificaciones_mensaje/',FormularioNotificaciones.as_view(), name='notificaciones_mensaje'),
    path('eliminar_mensaje/<int:pk>/', MensajeDelete.as_view(), name='eliminar'),
    path('modificar/<int:pk>/', MensajeUpdate.as_view(),name='editar')
]


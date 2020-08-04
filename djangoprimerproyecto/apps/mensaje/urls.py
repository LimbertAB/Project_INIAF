from django.urls import path
from apps.mensaje.views import MensajeList

app_name = 'mensaje'

urlpatterns = [ 
    path('', MensajeList.as_view(), name='listar'), 
]


from django.urls import path
from apps.salida.views import SalidaList,SalidaCreate,SalidaUpdate,SalidaDetailView,SalidaDelete

app_name = 'salida'

urlpatterns = [
    path('', SalidaList.as_view(), name='listar'),
    path('crear_sal/', SalidaCreate.as_view(), name='crear'),
    path('modificar_salida/<int:pk>/', SalidaUpdate.as_view(), name='modificar'),
    path('ver/<int:pk>/',SalidaDetailView.as_view(), name='ver'),
    path('eliminar_salida/<int:pk>/', SalidaDelete.as_view(), name='eliminar')
] 
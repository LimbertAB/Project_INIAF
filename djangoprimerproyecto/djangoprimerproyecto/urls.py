"""libreria URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.conf.urls.static import static
from django.urls import path,include
from django.contrib.auth import views
from . import views
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    #path('',views.LoginView.as_view(template_name='login.html'), name='login'),
    path('',views.login_user, name='login'),
    path('usuario/', include(('apps.usuario.urls'), namespace='usuario'), name='usuario'),
    path('dashboard/', views.dashboard, name='dashboard'),
    #path('area/', include(('apps.area.urls'))),
    path('usuario/baja/',views.baja_objecto, name='usuario_baja'),
    path('programa/', include(('apps.programa.urls'), namespace='programa'), name='programa'),
    path('partida/', include(('apps.partida.urls'), namespace='partida'), name='partida'),
    path('movilidad/', include(('apps.movilidad.urls'), namespace='movilidad'), name='movilidad'),
    path('formulario/', include(('apps.formulario.urls'), namespace='formulario'), name='formulario'),
    path('salida/', include(('apps.salida.urls'), namespace='salida'), name='salida'),
    path('mensaje/', include(('apps.mensaje.urls'), namespace='mensaje'), name='mensaje')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
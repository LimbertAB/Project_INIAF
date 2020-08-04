from django.shortcuts import render
from django.views.generic import CreateView
from .forms import MensajeForm
from .models import Mensaje
from apps.usuario.models import Usuario
from apps.usuario.views import JSONResponseMixin
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage

class MensajeList(CreateView):
    
    def post(self, request, *args, **kwargs):
        mensaje = Mensaje ()
        if request.method == 'POST':
            mensaje = Mensaje () 
            fs = FileSystemStorage ()
            mensaje.asunto = request.POST.get('asunto')
            myfile = request.FILES.get('document')
            filename = fs.save(myfile.name, myfile)
            mensaje.cuerpo = fs.url(filename)
            mensaje.receptor = int(request.POST.get('id_usuario_id'))
            mensaje.id_usuario_id = request.session.get('id')
            mensaje.save()
            return JsonResponse({'estado': 1})
        

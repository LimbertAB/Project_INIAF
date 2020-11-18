from django.shortcuts import render
from django.views.generic import CreateView,TemplateView,ListView,DeleteView, UpdateView
from .forms import MensajeForm
from .models import Mensaje
from apps.usuario.models import Usuario
from apps.usuario.views import JSONResponseMixin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
import os
import glob

class MensajeList(LoginRequiredMixin,ListView):
    model = Mensaje
    template_name = 'mensaje/index.html' 
    paginate_by = 4
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        #queryset=Mensaje.objects.filter(receptor=self.request.session.get('id'))
        mensaje_list=[]
        for i in Mensaje.objects.filter(receptor=self.request.session.get('id')):
            usuario_query=Usuario.objects.filter(id=i.id_usuario_id)[0]
            mensaje_list.append({
                'id': i.id,
                'id_usuario_id': usuario_query.nombre,
                'asunto':i.asunto,
                'cuerpo':i.cuerpo,
                'estado':i.estado,
                'fecha':i.created_at
            })
        context['object_list'] = mensaje_list
        return context

class MensajeCreate(LoginRequiredMixin,CreateView):
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

class FormularioNotificaciones(LoginRequiredMixin,TemplateView): 
    model = Mensaje

    def get(self, request, *args, **kwargs):
        context_dict = {
            'mensaje_notificacion': Mensaje.objects.filter(estado=True,receptor=request.session.get('id')).count(),
            #'salida_notificacion': Salida.objects.filter(estado=True).count(),
        }
        return JsonResponse(context_dict)

class MensajeDelete(LoginRequiredMixin,DeleteView):
    model = Mensaje
    form_class = MensajeForm

    def delete(self,request, pk, *args, **kwargs):
        if request.is_ajax():
            Mensaje.objects.filter(id=pk).delete()
            return JsonResponse({'estado': 1})

class MensajeUpdate(LoginRequiredMixin,UpdateView):
    model = Mensaje
    form_class = MensajeForm
    def form_valid(self,request, pk, *args, **kwargs):
            instancia = Mensaje.objects.get(id=pk)
            instancia.estado='false'
            instancia.save()
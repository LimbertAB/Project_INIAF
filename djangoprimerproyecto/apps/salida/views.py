from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView,DeleteView,ListView,UpdateView,DetailView
from .forms import SalidaForm
from .models import Salida 
from apps.usuario.views import JSONResponseMixin
from django.http import JsonResponse

class SalidaList(CreateView):
    model = Salida
    form_class = SalidaForm
    template_name = 'Salida/crear.html'

class SalidaCreate(CreateView):

    model = Salida
    form_class = SalidaForm
    template_name = 'Salida/crear.html'


    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.id_usuario_id = self.request.session['id']
        obj.save()

class SalidaUpdate(UpdateView):
    model = Salida
    form_class = SalidaForm
    template_name = 'salida/modificar.html'
    success_url=reverse_lazy('salida:crear') 

class SalidaDetailView(JSONResponseMixin,DetailView):
    model = Salida
    #json_dumps_kwargs={'indent': 1}

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        context_dict = {
            'id': self.object.id,
            'fecha_salida': self.object.fecha_salida,
            'fecha_retorno': self.object.fecha_retorno,
            'tiempo': self.object.tiempo,
            'motivo': self.object.motivo,
            'motivo': self.object.motivo
        }
        return self.render_json_response(context_dict)
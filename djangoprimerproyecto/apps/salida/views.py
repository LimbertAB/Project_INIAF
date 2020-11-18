from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import CreateView,DeleteView,ListView,UpdateView,DetailView
from .forms import SalidaForm
from .models import Salida 
from apps.usuario.models import Usuario
from apps.usuario.mixins import JSONResponseMixin,UsuarioAdministradorMixin
from django.http import JsonResponse

class SalidaList(LoginRequiredMixin,CreateView):
    model = Salida
    form_class = SalidaForm
    template_name = 'Salida/crear.html'

class SalidaCreate(LoginRequiredMixin,CreateView):

    model = Salida
    form_class = SalidaForm
    template_name = 'Salida/crear.html'

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.id_usuario_id = self.request.session['id']
        obj.save()
        return JsonResponse({'estado': 1})

class SalidaUpdate(LoginRequiredMixin,UpdateView):
    model = Salida
    form_class = SalidaForm

    def form_valid(self, form):
        salida_query=Salida.objects.filter(id=self.kwargs['pk'])[0]
        if salida_query.id_usuario_id != self.request.session['id']:
            return JsonResponse({'estado': 0})
        obj = form.save(commit=False)
        obj.id_usuario_id = self.request.session['id']
        obj.save()
        return JsonResponse({'estado': 1})

class SalidaDetailView(LoginRequiredMixin,JSONResponseMixin,DetailView):
    model = Salida
    #json_dumps_kwargs={'indent': 1}

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        query_usuario=Usuario.objects.filter(id=self.request.session.get('id'))[0]
        context_dict = {
            'id': self.object.id,
            'fecha_salida': str(self.object.fecha_salida),
            'fecha_retorno': str(self.object.fecha_retorno),
            'tiempo': self.object.tiempo,
            'motivo': self.object.motivo,
            'nombre':query_usuario.nombre,
            'apellido':query_usuario.apellido,
            'cargo':query_usuario.cargo,
            'unidad':query_usuario.unidad,
        }
        return self.render_json_response(context_dict)

class SalidaDelete(LoginRequiredMixin,DeleteView):
    model = Salida
    form_class = SalidaForm

    def delete(self,request, pk, *args, **kwargs):
        if request.is_ajax():
            Salida.objects.filter(id=pk).delete()
            return JsonResponse({'estado': 1})
from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView,DeleteView,ListView,UpdateView,TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from .forms import UsuarioForm
from .models import Usuario
from .mixins import JSONResponseMixin,UsuarioAdministradorMixin

class UsuarioList(LoginRequiredMixin,UsuarioAdministradorMixin,ListView):
    model = Usuario
    template_name = 'usuario/index.html'
    queryset = Usuario.objects.all().order_by('id')
    paginate_by = 4
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = UsuarioForm
        return context

class UsuarioCreate(LoginRequiredMixin,UsuarioAdministradorMixin,CreateView):
    model = Usuario
    form_class = UsuarioForm
    success_url = reverse_lazy('usuario:listar')

class UsuarioUpdate(LoginRequiredMixin,UsuarioAdministradorMixin,UpdateView):
    model = Usuario
    form_class = UsuarioForm
    template_name = 'usuario/modificar.html'
    success_url = reverse_lazy('usuario:listar')

class ListUsuario(JSONResponseMixin,TemplateView):

    def get(self, request, *args, **kwargs):
        usuario_list=[]
        for i in Usuario.objects.exclude(id = request.session['id']):
            usuario_list.append({
                'id':i.id,
                'nombre': i.nombre +" "+i.apellido,
            })
        return self.render_json_response({'listausuario':usuario_list})

class UsuarioDelete(LoginRequiredMixin,UsuarioAdministradorMixin,DeleteView):
    model = Usuario
    template_name = 'usuario/crear.html'
    success_url = reverse_lazy('usuario.index')
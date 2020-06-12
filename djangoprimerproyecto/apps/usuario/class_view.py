from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView,DeleteView,ListView,UpdateView
from .forms import UsuarioForm
from .models import Usuario

class UsuarioList(ListView):
    model = Usuario
    template_name = 'usuario/index.html'
    queryset = Usuario.objects.all().order_by('id')
    paginate_by = 4
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = UsuarioForm
        return context

class UsuarioCreate(CreateView):
    model = Usuario
    form_class = UsuarioForm
    template_name = 'usuario/crear.html'
    success_url = reverse_lazy('usuario:listar')

class UsuarioUpdate(UpdateView):
    model = Usuario
    form_class = UsuarioForm
    template_name = 'usuario/modificar.html'
    success_url = reverse_lazy('usuario:listar')

class UsuarioDelete(DeleteView):
    model = Usuario
    template_name = 'usuario/crear.html'
    success_url = reverse_lazy('usuario.index')
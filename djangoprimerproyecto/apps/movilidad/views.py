from django.shortcuts import render,redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
from django.views.generic import CreateView,DeleteView,ListView,UpdateView
from .forms import MovilidadForm
from .models import Movilidad
from apps.usuario.mixins import UsuarioAdministradorMixin

class MovilidadList(LoginRequiredMixin,UsuarioAdministradorMixin,ListView):
    model = Movilidad
    template_name = 'movilidad/index.html'
    paginate_by = 4
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = MovilidadForm
        return context

class MovilidadCreate(LoginRequiredMixin,UsuarioAdministradorMixin,CreateView):
    model = Movilidad
    form_class = MovilidadForm
    template_name = 'movilidad/crear.html'
    success_url = reverse_lazy('movilidad:listar')

class MovilidadUpdate(LoginRequiredMixin,UsuarioAdministradorMixin,UpdateView):
    model = Movilidad
    form_class = MovilidadForm
    template_name = 'movilidad/modificar.html'
    success_url = reverse_lazy('movilidad:listar')

class MovilidadDelete(LoginRequiredMixin,UsuarioAdministradorMixin,DeleteView):
    model = Movilidad
    template_name = 'movilidad/crear.html'
    success_url = reverse_lazy('movilidad.index')
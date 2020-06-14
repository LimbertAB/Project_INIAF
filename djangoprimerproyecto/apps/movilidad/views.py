from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView,DeleteView,ListView,UpdateView
from .forms import MovilidadForm
from .models import Movilidad

class MovilidadList(ListView):
    model = Movilidad
    template_name = 'movilidad/index.html'
    paginate_by = 4
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = MovilidadForm
        return context

class MovilidadCreate(CreateView):
    model = Movilidad
    form_class = MovilidadForm
    template_name = 'movilidad/crear.html'
    success_url = reverse_lazy('movilidad:listar')

class MovilidadUpdate(UpdateView):
    model = Movilidad
    form_class = MovilidadForm
    template_name = 'movilidad/modificar.html'
    success_url = reverse_lazy('movilidad:listar')

class MovilidadDelete(DeleteView):
    model = Movilidad
    template_name = 'movilidad/crear.html'
    success_url = reverse_lazy('movilidad.index')
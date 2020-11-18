from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import CreateView,DeleteView,ListView,UpdateView,DetailView,TemplateView
from apps.usuario.mixins import JSONResponseMixin,UsuarioAdministradorMixin
from django.http import JsonResponse
from .forms import ProgramaForm
from .models import Programa

class ProgramaList(LoginRequiredMixin,UsuarioAdministradorMixin,ListView):
    model = Programa
    template_name = 'programa/index.html'
    queryset = Programa.objects.all().order_by('id')
    paginate_by = 5
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = ProgramaForm
        return context

class ProgramaCreate(LoginRequiredMixin,UsuarioAdministradorMixin,CreateView):
    model = Programa
    form_class = ProgramaForm
    template_name = 'programa/'
    success_url = reverse_lazy('programa:listar')

class ProgramaUpdate(LoginRequiredMixin,UsuarioAdministradorMixin,UpdateView):
    model = Programa
    form_class = ProgramaForm
    def form_valid(self, form):
        self.object = form.save()
        print(self.object)
        return JsonResponse({'estado': 1})

class ProgramaDelete(LoginRequiredMixin,UsuarioAdministradorMixin,DeleteView):
    model = Programa
    template_name = 'programa/crear.html'
    success_url = reverse_lazy('programa.index')

class ProgramaDetailView(LoginRequiredMixin,UsuarioAdministradorMixin,JSONResponseMixin,DetailView):
    model = Programa
    #json_dumps_kwargs={'indent': 1}

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        context_dict = {
            'id': self.object.id,
            'nombre': self.object.nombre,
            'proyecto': self.object.proyecto,
            'actividad': self.object.actividad,
            'descripcion': self.object.descripcion
        }
        return self.render_json_response(context_dict)



from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import CreateView,DeleteView,ListView,UpdateView,DetailView,TemplateView
from django.http import JsonResponse
from .forms import PartidaForm
from .models import Partida
from apps.usuario.mixins import JSONResponseMixin,UsuarioAdministradorMixin

class PartidaList(LoginRequiredMixin,UsuarioAdministradorMixin,ListView):
    model = Partida
    template_name = 'partida/index.html'
    queryset = Partida.objects.all().order_by('id')
    paginate_by = 5
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = PartidaForm
        return context

class PartidaCreate(LoginRequiredMixin,UsuarioAdministradorMixin,CreateView):
    model = Partida
    form_class = PartidaForm
    template_name = 'partida/crear.html'
    success_url = reverse_lazy('partida:listar')

class PartidaUpdate(LoginRequiredMixin,UsuarioAdministradorMixin,UpdateView):
    model = Partida
    form_class = PartidaForm
    template_name = 'partida/modificar.html'
    success_url = reverse_lazy('partida:listar')

class PartidaDelete(LoginRequiredMixin,UsuarioAdministradorMixin,DeleteView):
    model = Partida
    template_name = 'partida/crear.html'
    success_url = reverse_lazy('partida.index')

class PartidaDetailViewd(LoginRequiredMixin,UsuarioAdministradorMixin,DetailView):
    content_type = 'application/javascript'
    queryset = Partida.objects.all()
    def get_object(self):
        print(self)
        obj = super().get_object()
        return obj

class PartidaDetailView(LoginRequiredMixin,UsuarioAdministradorMixin,JSONResponseMixin,TemplateView):
    model = Partida
    json_dumps_kwargs = {'id': 1}

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        context_dict = {
            'name': self.object.user.fuente,
            'location': self.object.numero
        }
        return self.render_json_response(context_dict)



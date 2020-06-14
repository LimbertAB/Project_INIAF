from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views.generic import CreateView,DeleteView,ListView,UpdateView,DetailView,TemplateView
from django.http import JsonResponse
from .forms import PartidaForm
from .models import Partida

class JSONResponseMixin:
    def render_to_json_response(self, context, **response_kwargs):
        return JsonResponse(
            self.get_data(context),
            **response_kwargs
        )

    def get_data(self, context):
        print("___________________________-____--___--___-----________________")
        print(context)
        return context

class PartidaList(ListView):
    model = Partida
    template_name = 'partida/index.html'
    queryset = Partida.objects.all().order_by('id')
    paginate_by = 5
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = PartidaForm
        return context

class PartidaCreate(CreateView):
    model = Partida
    form_class = PartidaForm
    template_name = 'partida/crear.html'
    success_url = reverse_lazy('partida:listar')

class PartidaUpdate(UpdateView):
    model = Partida
    form_class = PartidaForm
    template_name = 'partida/modificar.html'
    success_url = reverse_lazy('partida:listar')

class PartidaDelete(DeleteView):
    model = Partida
    template_name = 'partida/crear.html'
    success_url = reverse_lazy('partida.index')

class PartidaDetailViewd(DetailView):
    content_type = 'application/javascript'
    queryset = Partida.objects.all()
    def get_object(self):
        print(self)
        obj = super().get_object()
        return obj

class PartidaDetailView(JSONResponseMixin,TemplateView):
    queryset = Partida.objects.all()
    def render_to_response(self, context, **response_kwargs):

        con=self.render_to_response(self, context)

        return JsonResponse({'form': "form"})



from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views.generic import ListView,CreateView,TemplateView
from .forms import FormularioForm
from .models import Formulario 
from apps.partida.models import Partida
from django.http import JsonResponse

class FormularioList(ListView):
    model = Formulario
    template_name = 'formulario/index.html'

class FormularioCreate(CreateView):
    model = Formulario
    form_class = FormularioForm
    template_name = 'Formulario/crear.html'

class OBTNER_PARTIDAS(TemplateView):
    template_name = "crear.html"

    def post(self, request, *args, **kwargs):
        data = {}
        print("llego a la funcion post")
        try:
            action = request.POST['action']
            if action == 'search_partida_id':
                print("llego al if del funcion post")
                data = []
                var=int(request.POST['id'])
                print(type(var))
                for i in Partida.objects.filter(id_programa_id = request.POST['id']):
                    print("llego al for del funcion post")
                    data.append({
                        'id': i.id,
                        'numero': i.numero,
                        'glosa_uno':i.glosa_uno,
                        'glosa_dos':i.glosa_dos,
                        'unidad':i.unidad
                    })
            else:
                print("llego al else de if del funcion post")
                data['error'] = 'ha ocurrido un error'
        except Exception as e:
            print("llego a la excep de post")
            data['error'] = str(e)
        return JsonResponse(data, safe=False)
  
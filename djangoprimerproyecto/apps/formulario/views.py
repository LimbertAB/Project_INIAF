from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views.generic import ListView,CreateView,TemplateView
from .forms import FormularioForm
from .models import Formulario 
from apps.partida.models import Partida
from apps.salida.models import Salida
from .models import Formulario_Recurso
from django.http import JsonResponse, HttpResponseRedirect


class FormularioList(ListView):
    model = Formulario
    template_name = 'formulario/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        query = Formulario.objects.filter(id_usuario=self.request.session.get('id')) 
        formulario_output_list = []
        for form in query:
            for_dict = {
                "id": form.id,
                "start": str(form.fecha_salida),
                "end": str(form.fecha_llegada),
                'descripcion':form.descripcion
            }
            formulario_output_list.append(for_dict)
        query_salida=Salida.objects.filter(id_usuario_id=self.request.session.get('id'))
        salida_list=[]
        for sal in query_salida:
            sal_list={
                'id':sal.id,
                'fecha_salida':str(sal.fecha_salida),
                'fecha_retorno':str(sal.fecha_retorno),
                'motivo':sal.motivo
            }
            salida_list.append(sal_list)
        context["formulario"] = formulario_output_list
        context["salida"] = salida_list
        return context
    

class FormularioCreate(CreateView):
    model = Formulario
    form_class = FormularioForm
    template_name = 'Formulario/crear.html'

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.id_usuario_id = self.request.session['id']
        obj.save()
        print(obj.id)
        cantidad=self.request.POST.getlist('cantidad[]')
        precio_unitario=self.request.POST.getlist('precio_unitario[]')
        unidad_liquidacion=self.request.POST.getlist('unidad_liquidacion[]')
        id_partida_id=self.request.POST.getlist('id_partida_id[]')
 
        print(len(cantidad),len(precio_unitario),len(unidad_liquidacion),len(id_partida_id))

        for p,c,u,i in zip(precio_unitario,cantidad,unidad_liquidacion,id_partida_id):
            recurso_object = Formulario_Recurso.objects.create(
                precio_unitario=p,
                cantidad=c,
                unidad_liquidacion=u,
                id_formulario_id=obj.id,
                id_partida_id=i,
            ).save()
        
class OBTNER_PARTIDAS(TemplateView):
    template_name = "crear.html"

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'search_partida_id':
                data = []
                var=int(request.POST['id'])
                for i in Partida.objects.filter(id_programa_id = request.POST['id']):
                    data.append({
                        'id': i.id,
                        'numero': i.numero,
                        'glosa_uno':i.glosa_uno,
                        'glosa_dos':i.glosa_dos,
                        'unidad':i.unidad
                    })
            else:
                data['error'] = 'ha ocurrido un error'
        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data, safe=False)
  
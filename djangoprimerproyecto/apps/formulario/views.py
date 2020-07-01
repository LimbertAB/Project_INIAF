from django.shortcuts import render,redirect
from django.urls import reverse_lazy
from django.views.generic import ListView,CreateView,TemplateView,DetailView
from .forms import FormularioForm
from .models import Formulario
from apps.partida.models import Partida
from apps.salida.models import Salida
from apps.movilidad.models import Movilidad
from apps.usuario.models import Usuario
from apps.programa.models import Programa
from .models import Formulario_Recurso
from django.http import JsonResponse, HttpResponseRedirect
from apps.usuario.views import JSONResponseMixin


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
        query_salida=Salida.objects.filter(id_usuario_id=self.request.session.get('id'), estado = True)
        salida_list=[]
        for sal in query_salida:
            sal_list={
                'id':sal.id,
                'fecha_salida':str(sal.fecha_salida),
                'fecha_retorno':str(sal.fecha_retorno),
                'tiempo':str(sal.tiempo),
                'motivo':sal.motivo
            }
            salida_list.append(sal_list)
        context["formulario"] = formulario_output_list
        context["salida"] = salida_list
        context['form'] = FormularioForm
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

class FormularioDetailView(JSONResponseMixin,DetailView):
    model = Formulario
    #json_dumps_kwargs={'indent': 1}

    def get(self, request, *args, **kwargs):
        self.object = self.get_object()
        usuario_query=Usuario.objects.filter(id=self.object.id_usuario_id)[0]
        programa_query=Programa.objects.filter(id=self.object.id_programa_id)[0]
        vehiculo_query=Movilidad.objects.filter(id=self.object.id_movilidad_id)[0]
        vehiculo_list={
            'tipo':vehiculo_query.tipo,
            'marca':vehiculo_query.marca,
            'modelo':vehiculo_query.modelo,
            'placa':vehiculo_query.placa,
            'rendimiento':vehiculo_query.rendimiento,
            'estado':vehiculo_query.estado,
        }
        partida_query=Partida.objects.filter(id_programa_id=self.object.id_programa_id)
        partida_list = []
        for i in Partida.objects.filter(id_programa_id = self.object.id_programa_id):
            partida_list.append({
                'id': i.id,
                'numero': i.numero,
                'glosa_uno':i.glosa_uno,
                'glosa_dos':i.glosa_dos,
                'unidad':i.unidad
            })
        recurso_list = []
        for i in Formulario_Recurso.objects.filter(id_formulario = self.object.id):
            recurso_list.append({
                'id':i.id,
                'id_partida_id': i.id_partida_id,
                'precio_unitario': i.precio_unitario,
                'cantidad': i.cantidad,
                'unidad_liquidacion':i.unidad_liquidacion
            })
        context_dict = {
            'id': self.object.id,
            'fecha': self.object.fecha,
            'descripcion': self.object.descripcion,
            'lugar': self.object.lugar,
            'fecha_salida': self.object.fecha_salida,
            'fecha_llegada': self.object.fecha_llegada,
            'numero_memo': self.object.numero_memo,
            'estado': self.object.estado,
            'id_movilidad_id': self.object.id_movilidad_id,
            'id_programa_id': self.object.id_programa_id,
            'combustible': self.object.combustible,
            'kilometraje': self.object.kilometraje,
            'kilometraje_viaje': self.object.kilometraje_viaje,
            'numero': self.object.numero,
            'observacion': self.object.observacion,
            'resolucion_administrativa': self.object.resolucion_administrativa,
            'vehiculo':vehiculo_list,
            'usuario':usuario_query.nombre+" "+usuario_query.apellido,
            'partida':partida_list,
            'recurso':recurso_list,
            'programa':programa_query.nombre
        }
        return self.render_json_response(context_dict)
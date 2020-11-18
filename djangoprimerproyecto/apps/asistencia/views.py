from django.shortcuts import render
from django.views.generic import CreateView,TemplateView,ListView,DeleteView, UpdateView,DetailView
from .forms import AsistenciaForm
from .models import Asistencia
from apps.usuario.models import Usuario
from apps.usuario.views import JSONResponseMixin
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage
import os
import glob
import pyodbc
from pathlib import Path

class AsistenciaList(LoginRequiredMixin,ListView):
    model = Asistencia
    template_name = 'asistencia/index.html' 
    paginate_by = 4
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        #queryset=Asistencia.objects.filter(receptor=self.request.session.get('id'))
        asistencia_list=[]
        for i in Asistencia.objects.all():
            asistencia_list.append({
                'id': i.id,
                'titulo':i.titulo,
                'descripcion':i.descripcion,
                'estado':i.estado,
            })
        
        # print(os.path.dirname(os.path.abspath(__file__)))
        # print('HOLSDD____________________________')
        # print("Directory Path:", Path().absolute())
        # aux=str(Path().absolute())+'\csistencia\cttBackup.mdb;'
        # print(aux)
        # print('_________________')

        conn = pyodbc.connect(r'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ='+str(Path().absolute())+'\csistencia\cttBackup.mdb;')
        cursor = conn.cursor()
        cursor.execute('select c.USERID as id,u.Name from CHECKINOUT AS c INNER JOIN USERINFO as u ON c.USERID=u.USERID GROUP BY c.USERID,u.Name')
        
        for row in cursor.fetchall():
            print (row.id)

        context['object_list'] = asistencia_list
        return context

class FormularioDetailView(LoginRequiredMixin,JSONResponseMixin,DetailView):
    # model = Formulario

    def get(self, request, *args, **kwargs):
        conn = pyodbc.connect(r'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ='+str(Path().absolute())+'\csistencia\cttBackup.mdb;')
        cursor = conn.cursor()
        cursor.execute('select c.USERID,u.Name from CHECKINOUT AS c INNER JOIN USERINFO as u ON c.USERID=u.USERID GROUP BY c.USERID,u.Name')
        partida_list = []
        for row in cursor.fetchall():
            partida_list.append({
                'id': row.id,
                'nombre': row.Name
            })
            print(partida_list)

# class FormularioDetailView(LoginRequiredMixin,JSONResponseMixin,DetailView):
#     model = Formulario

#     def get(self, request, *args, **kwargs):
#         self.object = self.get_object()
#         usuario_query=Usuario.objects.filter(id=self.object.id_usuario_id)[0]
#         programa_query=Programa.objects.filter(id=self.object.id_programa_id)[0]
#         vehiculo_query=Movilidad.objects.filter(id=self.object.id_movilidad_id)[0]
#         vehiculo_list={
#             'tipo':vehiculo_query.tipo,
#             'marca':vehiculo_query.marca,
#             'modelo':vehiculo_query.modelo,
#             'placa':vehiculo_query.placa,
#             'rendimiento':vehiculo_query.rendimiento,
#             'estado':vehiculo_query.estado,
#         }
#         partida_query=Partida.objects.filter(id_programa_id=self.object.id_programa_id)
#         partida_list = []
#         for i in Partida.objects.filter(id_programa_id = self.object.id_programa_id):
#             partida_list.append({
#                 'id': i.id,
#                 'numero': i.numero,
#                 'glosa_uno':i.glosa_uno,
#                 'glosa_dos':i.glosa_dos,
#                 'unidad':i.unidad
#             })
#         recurso_list = []
#         for i in Formulario_Recurso.objects.filter(id_formulario = self.object.id):
#             recurso_list.append({
#                 'id':i.id,
#                 'id_partida_id': i.id_partida_id,
#                 'precio_unitario': i.precio_unitario,
#                 'cantidad': i.cantidad,
#                 'unidad_liquidacion':i.unidad_liquidacion
#             })
#         context_dict = {
#             'id': self.object.id,
#             'fecha': self.object.fecha,
#             'lugar': self.object.lugar,
#             'fecha_salida': str(self.object.fecha_salida),
#             'fecha_llegada': str(self.object.fecha_llegada),
#             'numero_memo': self.object.numero_memo,
#             'estado': self.object.estado,
#             'id_movilidad_id': self.object.id_movilidad_id,
#             'id_programa_id': self.object.id_programa_id,
#             'combustible': self.object.combustible,
#             'kilometraje': self.object.kilometraje,
#             'kilometraje_viaje': self.object.kilometraje_viaje,
#             'numero': self.object.numero,
#             'observacion': self.object.observacion,
#             'resolucion_administrativa': self.object.resolucion_administrativa,
#             'vehiculo':vehiculo_list,
#             'usuario':usuario_query.nombre+" "+usuario_query.apellido,
#             'cargo':usuario_query.cargo,
#             'partida':partida_list,
#             'recurso':recurso_list,
#             'programa':programa_query.nombre
#         }
#         return self.render_json_response(context_dict)


class AsistenciaCreate(LoginRequiredMixin,CreateView):
    def post(self, request, *args, **kwargs):
        asistencia = Asistencia ()
        if request.method == 'POST':
            asistencia = Asistencia () 
            fs = FileSystemStorage ()
            asistencia.asunto = request.POST.get('asunto')
            myfile = request.FILES.get('document')
            filename = fs.save(myfile.name, myfile)
            asistencia.cuerpo = fs.url(filename)
            asistencia.receptor = int(request.POST.get('id_usuario_id'))
            asistencia.id_usuario_id = request.session.get('id')
            asistencia.save()
            return JsonResponse({'estado': 1})

# class FormularioNotificaciones(LoginRequiredMixin,TemplateView): 
#     model = Asistencia

#     def get(self, request, *args, **kwargs):
#         context_dict = {
#             'asistencia_notificacion': Asistencia.objects.filter(estado=True,receptor=request.session.get('id')).count(),
#             #'salida_notificacion': Salida.objects.filter(estado=True).count(),
#         }
#         return JsonResponse(context_dict)

# class AsistenciaDelete(LoginRequiredMixin,DeleteView):
#     model = Asistencia
#     form_class = AsistenciaForm

#     def delete(self,request, pk, *args, **kwargs):
#         if request.is_ajax():
#             Asistencia.objects.filter(id=pk).delete()
#             return JsonResponse({'estado': 1})

# class AsistenciaUpdate(LoginRequiredMixin,UpdateView):
#     model = Asistencia
#     form_class = AsistenciaForm
#     def form_valid(self,request, pk, *args, **kwargs):
#             instancia = Asistencia.objects.get(id=pk)
#             instancia.estado='false'
#             instancia.save()
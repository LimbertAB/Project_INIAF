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
        # conn = pyodbc.connect(r'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ='+str(Path().absolute())+'\documentos\\attBackup.mdb;')
        # cursor = conn.cursor()
        # cursor.execute('select c.USERID as id,u.Name from CHECKINOUT AS c INNER JOIN USERINFO as u ON c.USERID=u.USERID GROUP BY c.USERID,u.Name')
        
        # for row in cursor.fetchall():
        #     print (row.id)

        context['object_list'] = asistencia_list
        return context

class Asistencia_List_Usuarios_DetailView(LoginRequiredMixin,JSONResponseMixin,DetailView):
    model = Asistencia
    def get(self, request, *args, **kwargs):
        file_query=Asistencia.objects.filter(id=self.kwargs['pk'])[0]
        conn = pyodbc.connect(r'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ='+str(Path().absolute())+'\\documentos\\'+file_query.archivo+';')
        cursor = conn.cursor()
        cursor.execute('select c.USERID,u.Name from CHECKINOUT AS c INNER JOIN USERINFO as u ON c.USERID=u.USERID GROUP BY c.USERID,u.Name')
        usuarios_list = []
        for row in cursor.fetchall():
            usuarios_list.append({
                'id': row.USERID,
                'nombre': row.Name
            })
        context_dict = {
            'usuario':usuarios_list,
        }
        return self.render_json_response(context_dict)

class Asistencia_List_horas_DetailView(LoginRequiredMixin,JSONResponseMixin,DetailView):
    model = Asistencia
    def get(self, request, *args, **kwargs):
        print(self.request.GET.get('user'))
        print('despues del key_____________')
        file_query=Asistencia.objects.filter(id=self.kwargs['pk'])[0]
        conn = pyodbc.connect(r'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ='+str(Path().absolute())+'\\documentos\\'+file_query.archivo+';')
        cursor = conn.cursor()
        if(self.request.GET.get('user')=='0'):
            cursor.execute('select c.USERID,c.CHECKTIME,u.Name from CHECKINOUT AS c INNER JOIN USERINFO as u ON c.USERID=u.USERID')
        else:
            print(self.request.GET.get('user'))
            cursor.execute('select c.USERID,c.CHECKTIME,u.Name,u.SSN as ci from CHECKINOUT AS c INNER JOIN USERINFO as u ON c.USERID=u.USERID WHERE c.USERID='+str(self.request.GET.get('user')))
        usuarios_list = []
        for row in cursor.fetchall():
            usuarios_list.append({
                'id': row.USERID,
                'nombre': row.Name,
                'ci':row.ci,
                'fecha':row.CHECKTIME
            })
        context_dict = {
            'usuario':usuarios_list,
        }
        return self.render_json_response(context_dict)

class AsistenciaCreate(LoginRequiredMixin,CreateView):
    def post(self, request, *args, **kwargs):
        asistencia = Asistencia ()
        print('holadesde post')
        if request.method == 'POST':
            asistencia = Asistencia () 
            fs = FileSystemStorage ()
            asistencia.titulo = request.POST.get('asunto')
            myfile = request.FILES.get('document')
            filename = fs.save(myfile.name, myfile)
            asistencia.archivo = filename
            asistencia.descripcion = request.POST.get('descripcion')
            asistencia.id_usuario_id = request.session.get('id')
            asistencia.save()
            return JsonResponse({'estado': 1})
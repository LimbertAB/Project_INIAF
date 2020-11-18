from django.contrib.auth import authenticate,login
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, response
from django.shortcuts import redirect, render
from apps.usuario.models import Usuario
from apps.movilidad.models import Movilidad
from apps.formulario.models import Formulario
from apps.partida.models import Partida
from apps.programa.models import Programa
from apps.salida.models import Salida
from apps.mensaje.models import Mensaje
from django.http import JsonResponse

@login_required
def dashboard(request):
    if request.session.get('prioridad')==0:
        formulario=Formulario.objects.filter(id_usuario_id=request.session.get('id')).count()
        salida=Salida.objects.filter(id_usuario_id=request.session.get('id')).count()
        print(formulario)
        return render(request, 'principal/dashboard.html',{"formulario":formulario,'salida':salida,'mensaje':2})
    else:
        formulario=Formulario.objects.count()
        salida=Salida.objects.count()
        usuario=Usuario.objects.count()
        vehiculo=Movilidad.objects.count()
        partida=Partida.objects.count()
        programa=Programa.objects.count()
        # salida=Salida.objects.count()
        print(formulario)
        return render(request, 'principal/dashboard.html',{"formulario":formulario,'salida':salida,'usuario':usuario,'vehiculo':vehiculo,'programa':programa,'partida':partida,'mensaje':2 })

def login_user(request):
    if request.method == 'POST':
        ci=request.POST.get('ci')
        password = request.POST.get('password')
        user=authenticate(request,ci=ci,password=password)
        if user is not None:
            login(request,user)
            print(user.id)
            usuario= Usuario.objects.raw('select id,nombre,prioridad from usuario_usuario where id=%s LIMIT 1',[user.id])[0]
            request.session['id'] = usuario.id
            request.session['nombre'] = usuario.nombre
            request.session['prioridad'] = usuario.prioridad
            return redirect('dashboard/')
    elif request.session.get('id') :
        return redirect('dashboard/')
    context={}
    return render(request,'login.html',context)
        
@login_required
def baja_objecto(request):
    modelo=request.POST.get('modelo')
    id=request.POST.get('id')
    estado=request.POST.get('estado')
    estado=eval(modelo).objects.filter(id=id).update(estado=estado)
    return JsonResponse({'estado':estado})

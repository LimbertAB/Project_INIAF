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


def login_user(request):
    if request.method == 'POST':
        ci=request.POST.get('ci')
        password = request.POST.get('password')
        user=authenticate(request,ci=ci,password=password)
        if user is not None:
            login(request,user)
            usuario= Usuario.objects.raw('select id,nombre,prioridad from usuario_usuario where id=1 LIMIT 1')[0]
            request.session['id'] = usuario.id
            request.session['nombre'] = usuario.nombre
            request.session['prioridad'] = usuario.prioridad
            return redirect('dashboard/')
    context={}
    return render(request,'login.html',context)

@login_required
def dashboard(request):
    return render(request, 'principal/dashboard.html')

@login_required
def baja_objecto(request):
    modelo=request.POST.get('modelo')
    id=request.POST.get('id')
    estado=request.POST.get('estado')
    estado=eval(modelo).objects.filter(id=id).update(estado=estado)
    return HttpResponse('<h1 style="color:red">hola mayfrined<small>esto es small</small></h1>')


#def casa(request):
    #return HttpResponse('<h1 style="color:red">hola mayfrined<small>esto es small</small></h1>')
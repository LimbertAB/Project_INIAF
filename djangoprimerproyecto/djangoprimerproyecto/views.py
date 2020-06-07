from django.contrib.auth import authenticate,login
from django.http import HttpResponse
from django.shortcuts import redirect, render
from apps.usuario.models import Usuario


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
def dashboard(request):
    return render(request, 'principal/dashboard.html')
#def casa(request):
    #return HttpResponse('<h1 style="color:red">hola mayfrined<small>esto es small</small></h1>')
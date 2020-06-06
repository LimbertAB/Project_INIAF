from django.contrib.auth import authenticate,login
from django.http import HttpResponse
from django.shortcuts import redirect, render


def login_user(request):
    print("antes de entrar")
    if request.method == 'POST':
        print(request.method)
        print("entro")
        ci=request.POST.get('ci')
        password = request.POST.get('password')
        user=authenticate(request,ci=ci,password=password)
        if user is not None:
            login(request,user)
            return redirect('usuario/crear_usuario')
    context={}
    return render(request,'login.html',context)

#def casa(request):
    #return HttpResponse('<h1 style="color:red">hola mayfrined<small>esto es small</small></h1>')
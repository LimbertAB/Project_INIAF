from django.shortcuts import render, redirect
from .forms import UsuarioForm
from django.http.response import HttpResponse
from .models import Usuario
# Create your views here.

def listarUsuario(request):
    usuarios=Usuario.objects.all()
    return render(request,'usuario/lista.html',{'usuarios':usuarios})

def crearUsuario(request):
    if request.method == 'POST':
        usuario_form = UsuarioForm(request.POST)
        if usuario_form.is_valid():
            print(usuario_form)
            usuario_form.save()
            return redirect('index')
    else:
        usuario_form = UsuarioForm()
    return render(request, 'usuario/crear.html',{'usuario_form':usuario_form})



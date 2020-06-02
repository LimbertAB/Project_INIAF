from django.http import HttpResponse

def home(request):
    return HttpResponse('Hola home')

def casa(request):
    return HttpResponse('<h1 style="color:red">hola mayfrined<small>esto es small</small></h1>')
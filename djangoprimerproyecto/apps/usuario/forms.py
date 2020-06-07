from django import forms
from django.core.exceptions import NON_FIELD_ERRORS

from .models import Usuario
#nombre apellido ci password email estado prioridad unidad
class UsuarioForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['nombre', 'apellido', 'ci', 'password', 'email', 'estado', 'prioridad', 'unidad']

        widgets = {'nombre': forms.TextInput(attrs={'class': 'form-control', 'placeholder':'Ejemplo: Juan'}),
            'apellido': forms.TextInput(attrs={'class': 'form-control', 'placeholder':'Ejemplo: Colmillo'}),
            'ci': forms.TextInput(attrs={'class': 'form-control','placeholder':'Ejemplo: 5345436'}),
            'password': forms.TextInput(attrs={'class': 'form-control','placeholder':'******'}),
            'email': forms.TextInput(attrs={'class': 'form-control','placeholder':'threecode@gmail.com'}),
            'estado': forms.Select(attrs={'class': 'form-control'}),
            'prioridad': forms.Select(attrs={'class': 'form-control'}),
            'unidad': forms.TextInput(attrs={'class': 'form-control','placeholder':'Ejemplo: Semillas'}),
        }

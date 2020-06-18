from django import forms
from django.core.exceptions import NON_FIELD_ERRORS

from .models import Programa
#nombre apellido ci password email estado prioridad unidad
class ProgramaForm(forms.ModelForm):
    class Meta:
        model = Programa
        fields = ['nombre', 'proyecto', 'actividad', 'descripcion']

        widgets = {'nombre': forms.TextInput(attrs={'class': 'form-control'}),
            'proyecto': forms.TextInput(attrs={'class': 'form-control'}),
            'actividad': forms.TextInput(attrs={'class': 'form-control'}),
            'glosa_dos': forms.TextInput(attrs={'class': 'form-control'}),
            'descripcion': forms.TextInput(attrs={'class': 'form-control'})
        }

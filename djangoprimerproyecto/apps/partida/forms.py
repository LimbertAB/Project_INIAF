from django import forms
from django.core.exceptions import NON_FIELD_ERRORS

from .models import Partida
#nombre apellido ci password email estado prioridad unidad
class PartidaForm(forms.ModelForm):
    class Meta:
        model = Partida
        fields = ['fuente', 'numero', 'glosa_uno', 'glosa_dos','unidad','id_programa']

        widgets = {'fuente': forms.TextInput(attrs={'class': 'form-control','placeholder':'Ejemplo....'}),
            'numero': forms.TextInput(attrs={'class': 'form-control','placeholder':'Ejemplo....','type':'number'}), 
            'glosa_uno': forms.TextInput(attrs={'class': 'form-control','placeholder':'Ejemplo....'}),
            'glosa_dos': forms.TextInput(attrs={'class': 'form-control','placeholder':'Ejemplo....'}),
            'unidad': forms.TextInput(attrs={'class': 'form-control','placeholder':'Ejemplo....'}),
            'id_programa': forms.Select(attrs={'class': 'form-control'}),
        }

from django import forms
from django.core.exceptions import NON_FIELD_ERRORS

from .models import Partida
#nombre apellido ci password email estado prioridad unidad
class PartidaForm(forms.ModelForm):
    class Meta:
        model = Partida
        fields = ['fuente', 'numero', 'glosa_uno', 'glosa_dos', 'unidad']

        widgets = {'fuente': forms.TextInput(attrs={'class': 'form-control'}),
            'numero': forms.TextInput(attrs={'class': 'form-control'}),
            'glosa_uno': forms.TextInput(attrs={'class': 'form-control'}),
            'glosa_dos': forms.TextInput(attrs={'class': 'form-control'}),
            'unidad': forms.TextInput(attrs={'class': 'form-control'}),
            'estado': forms.Select(attrs={'class': 'form-control'}),
        }

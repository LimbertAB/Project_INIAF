from django import forms
from django.core.exceptions import NON_FIELD_ERRORS

from .models import Movilidad 
#nombre apellido ci password email estado prioridad unidad
class MovilidadForm(forms.ModelForm):
    class Meta:
        model = Movilidad
        fields = ['marca' , 'modelo' , 'tipo' , 'placa' , 'rendimiento'  ]

        widgets = {'marca': forms.TextInput(attrs={'class': 'form-control'}),
            'modelo': forms.TextInput(attrs={'class': 'form-control'}),
            'tipo': forms.TextInput(attrs={'class': 'form-control'}),
            'placa': forms.TextInput(attrs={'class': 'form-control'}),
            'rendimiento': forms.TextInput(attrs={'class': 'form-control'}),
        }

from django import forms
from django.core.exceptions import NON_FIELD_ERRORS
from .models import Formulario

class FormularioForm(forms.ModelForm):
    class Meta:
        model = Formulario
        fields = ['numero' , 'fecha','subprograma','lugar' , 'fecha_salida' , 'fecha_llegada' , 'kilometraje','combustible', 'kilometraje_viaje', 'numero_memo' , 'resolucion_administrativa' , 'observacion'  , 'id_movilidad' , 'id_programa' ]

        widgets = {'numero': forms.TextInput(attrs={'class': 'form-control'}),
            'fecha': forms.DateInput(attrs={'class': 'form-control',"type":'date'}),
            'subprograma': forms.TextInput(attrs={'class': 'form-control'}),
            'lugar': forms.TextInput(attrs={'class': 'form-control'}),
            'fecha_salida': forms.DateTimeInput(attrs={'class': 'form-control'}),
            'fecha_llegada': forms.DateTimeInput(attrs={'class': 'form-control'}),
            'km_inicial' : forms.TextInput(attrs={'class': 'form-control'}),
            'kilometraje': forms.TextInput(attrs={'class': 'form-control'}),
            'combustible': forms.TextInput(attrs={'class': 'form-control'}),
            'kilometraje_viaje': forms.TextInput(attrs={'class': 'form-control'}),
            'numero_memo': forms.TextInput(attrs={'class': 'form-control'}),
            'resolucion_administrativa': forms.TextInput(attrs={'class': 'form-control'}),
            'observacion': forms.TextInput(attrs={'class': 'form-control'}),
            'id_movilidad': forms.Select(attrs={'class': 'form-control'}),
            'id_programa': forms.Select(attrs={'class': 'form-control'}),
        }

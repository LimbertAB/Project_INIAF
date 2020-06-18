from django import forms
from django.core.exceptions import NON_FIELD_ERRORS


from .models import Formulario
#nombre apellido ci password email estado prioridad unidad
class FormularioForm(forms.ModelForm):
    class Meta:
        model = Formulario
        fields = ['numero' , 'fecha' , 'descripcion' , 'lugar' , 'fecha_salida' , 'fecha_llegada' , 'kilometraje','combustible', 'kilometraje_viaje', 'numero_memo' , 'resolucion_administrativa' , 'observacion' , 'id_usuario' , 'id_movilidad' , 'id_programa' ]

        widgets = {'numero': forms.TextInput(attrs={'class': 'form-control'}),
            'fecha': forms.TextInput(attrs={'class': 'form-control','type':'date', 'value':'2020-12-12'}),
            'descripcion': forms.Textarea(attrs={'class':'form-control'}),
            'lugar': forms.TextInput(attrs={'class': 'form-control'}),
            'fecha_salida': forms.TextInput(attrs={'class': 'form-control','type':'date', 'value':'2020-12-12'}),
            'fecha_llegada': forms.TextInput(attrs={'class': 'form-control','type':'date', 'value':'2020-12-12'}),
            'km_inicial' : forms.TextInput(attrs={'class': 'form-control'}),
            'kilometraje': forms.TextInput(attrs={'class': 'form-control'}),
            'combustible': forms.TextInput(attrs={'class': 'form-control'}),
            'kilometraje_viaje': forms.Select(attrs={'class': 'form-control'}),
            'numero_memo': forms.TextInput(attrs={'class': 'form-control'}),
            'resolucion_administrativa': forms.TextInput(attrs={'class': 'form-control'}),
            'observacion': forms.TextInput(attrs={'class': 'form-control'}),
            'id_usuario': forms.TextInput(attrs={'class': 'form-control'}),
            'id_movilidad': forms.Select(attrs={'class': 'form-control'}),
            'id_programa': forms.Select(attrs={'class': 'form-control'}),
        }

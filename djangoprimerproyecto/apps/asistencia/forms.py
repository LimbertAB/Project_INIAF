from django import forms
from django.core.exceptions import NON_FIELD_ERRORS
from .models import Asistencia

class AsistenciaForm(forms.ModelForm):
    class Meta:
        model = Asistencia
        fields = ['titulo' , 'archivo', 'descripcion' , 'id_usuario' , 'estado']

        widgets = {'titulo': forms.TextInput(attrs={'class': 'form-control'}),
            'archivo': forms.TextInput(attrs={'class': 'form-control',"type":'date'}),
            'descripcion': forms.TextInput(attrs={'class': 'form-control'}),
            'idusuario': forms.DateTimeInput(attrs={'class': 'form-control'}),
            'estado': forms.DateTimeInput(attrs={'class': 'form-control'}),
        }

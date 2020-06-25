from django import forms
from django.core.exceptions import NON_FIELD_ERRORS
from .models import Salida

class SalidaForm(forms.ModelForm):
    class Meta:
        model = Salida
        fields = ['fecha_salida' , 'fecha_retorno' , 'tiempo' , 'motivo']

        widgets = {
            #'fecha_salida':forms.DateInput((format='%m-%d-%Y %H:%M:%S.%Z'),input_formats=('%m-%d-%Y %H:%M:%S.%Z')),
            #'fecha_retorno':forms.DateInput((format='%m-%d-%Y %H:%M:%S.%Z'),input_formats=('%m-%d-%Y %H:%M:%S.%Z' )),
            'fecha_salida':forms.DateTimeInput(attrs={'class': 'form-control'}),
            'fecha_retorno': forms.DateTimeInput(attrs={'class': 'form-control'}),
            'tiempo': forms.TextInput(attrs={'class': 'form-control'}),
            'motivo': forms.TextInput(attrs={'class': 'form-control'}),
        }
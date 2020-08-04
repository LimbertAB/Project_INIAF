from django import forms
from django.core.exceptions import NON_FIELD_ERRORS
from .models import Mensaje

class MensajeForm(forms.ModelForm):
    class Meta:
        model = Mensaje
        fields = ['asunto' , 'cuerpo' , 'id_usuario']

        widgets = {
            'asunto':forms.TextInput(attrs={'class': 'form-control'}),
            'cuerpo': forms.FileField(),
            'id_usuario': forms.Select(attrs={'class': 'form-control'}),
        }
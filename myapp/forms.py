from django import forms
from .models import Usuario

class RegistroForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['nombre_completo', 'correo', 'usuario', 'contraseña', 'fecha_nacimiento', 'genero']

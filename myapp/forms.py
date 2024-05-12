from django import forms
from .models import Usuario

class RegistroForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['nombre_completo', 'correo', 'usuario', 'contraseña', 'fecha_nacimiento', 'genero']

    def clean_correo(self):
        correo = self.cleaned_data.get('correo')
        if Usuario.objects.filter(correo=correo).exists():
            self.add_error('correo', "El correo actualmente se encuentra en uso.")
        return correo

    def clean_usuario(self):
        usuario = self.cleaned_data.get('usuario')
        if Usuario.objects.filter(usuario=usuario).exists():
            self.add_error('usuario', "El nombre de usuario ya está en uso.")
        return usuario
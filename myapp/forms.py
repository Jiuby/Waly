from django import forms
from .models import Usuario
from django.core.exceptions import ValidationError
import re

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


class LoginForm(forms.Form):
    usuario = forms.CharField()
    contraseña = forms.CharField(widget=forms.PasswordInput)

    def clean(self):
        cleaned_data = super().clean()
        usuario = cleaned_data.get('usuario')
        contraseña = cleaned_data.get('contraseña')
        if not Usuario.objects.filter(usuario=usuario, contraseña=contraseña).exists():
            self.add_error('usuario', 'Usuario o contraseña incorrectos.')
        return cleaned_data

class UpdateUserForm(forms.ModelForm):
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = Usuario
        fields = ['usuario', 'correo', 'contraseña']

    def clean_usuario(self):
        usuario = self.cleaned_data.get('usuario')
        if Usuario.objects.filter(usuario=usuario).exclude(usuario=self.instance.usuario).exists():
            self.add_error('usuario', "El nombre de usuario ya está en uso.")
        return usuario

    def clean_correo(self):
        correo = self.cleaned_data.get('correo')
        if Usuario.objects.filter(correo=correo).exclude(usuario=self.instance.usuario).exists():
            self.add_error('correo', "El correo ya está en uso.")
        return correo

    def clean_contraseña(self):
        password = self.cleaned_data.get('contraseña')
        password_regex = re.compile(r'^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$')
        if not password_regex.match(password):
            self.add_error('contraseña', "La contraseña debe tener al menos 6 caracteres, 1 mayúscula y 1 número.")
        return password

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('contraseña')
        confirm_password = cleaned_data.get('confirm_password')
        if password != confirm_password:
            self.add_error(None, 'Las contraseñas no coinciden.')

class actualizarPreferencias(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['compartirResultados', 'informacionCorreo']


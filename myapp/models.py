from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import UserManager



class UsuarioManager(BaseUserManager):
    def get_by_natural_key(self, username):
        return self.get(usuario=username)

class Usuario(AbstractBaseUser, PermissionsMixin):
    nombre_completo = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)
    usuario = models.CharField(max_length=50, unique=True)
    contraseña = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    genero = models.CharField(max_length=20)

    objects = UsuarioManager()

    USERNAME_FIELD = 'usuario'
    REQUIRED_FIELDS = ['correo', 'nombre_completo', 'fecha_nacimiento', 'genero']

    def __str__(self):
        return self.usuario
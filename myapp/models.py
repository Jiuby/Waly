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
    compartirResultados = models.BooleanField(default=False)
    informacionCorreo = models.BooleanField(default=False)
    auditivo = models.IntegerField(default=0)
    visual = models.IntegerField(default=0)
    memoria_fotografica = models.IntegerField(default=0)
    emociones = models.IntegerField(default=0)
    practico = models.IntegerField(default=0)
    lectura_escritura = models.IntegerField(default=0)
    aprendizaje_logico = models.IntegerField(default=0)
    concentracion = models.IntegerField(default=0)
    creatividad = models.IntegerField(default=0)
    adaptabilidad = models.IntegerField(default=0)
    gestion = models.IntegerField(default=0)
    empatia = models.IntegerField(default=0)


    objects = UsuarioManager()

    def total_puntos(self):
        return (self.auditivo + self.visual + self.memoria_fotografica + self.emociones + self.practico +
                self.lectura_escritura + self.aprendizaje_logico + self.concentracion + self.creatividad +
                self.adaptabilidad + self.gestion)

    USERNAME_FIELD = 'usuario'
    REQUIRED_FIELDS = ['correo', 'nombre_completo', 'fecha_nacimiento', 'genero', 'compartirResultados', 'informacionCorreo']

    def __str__(self):
        return self.usuario
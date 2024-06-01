from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['auditivo', 'visual', 'memoria_fotografica', 'emociones', 'practico', 'lectura_escritura', 'aprendizaje_logico', 'concentracion', 'creatividad', 'adaptabilidad', 'gestion', 'total_puntos']
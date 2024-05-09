from django.contrib.auth.models import User
from django.shortcuts import render
from django.core.mail import send_mail
from django.http import JsonResponse
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from .forms import RegistroForm
# Create your views here.

def login(request):
    return render(request, 'login.html')


def registro(request):
    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            usuario = form.save()

            # Enviar correo de verificación
            subject = 'Bienvenido a Waly'
            message = f'¡Hola {usuario.nombre_completo}! Te has registrado exitosamente en Waly.'
            from_email = 'walymedellin@gmail.com'  # Debe ser la misma dirección de correo configurada en settings.py
            to = usuario.correo
            send_mail(subject, message, from_email, [to])

            return redirect('login')  # Redirige a la página de inicio de sesión
    else:
        form = RegistroForm()
    return render(request, 'registro.html', {'form': form})




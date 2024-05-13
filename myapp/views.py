from django.shortcuts import render
from django.core.mail import send_mail
from .forms import RegistroForm, LoginForm
from django.shortcuts import redirect
from django.contrib.auth import authenticate, login
from django.http import JsonResponse, HttpResponse
# Create your views here.


def login_view(request):
    if request.method == 'POST':
        form = LoginForm(data=request.POST)
        if form.is_valid():
            usuario = form.cleaned_data.get('usuario')
            contraseña = form.cleaned_data.get('contraseña')
            user = authenticate(request, username=usuario, password=contraseña)
            if user is not None:
                login(request, user)
                return JsonResponse({'success': False, 'message': 'Usuario o contraseña incorrectos.'})
            else:
                return JsonResponse({'success': True, 'message': 'Usuario o contraseña Correcta.'})
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})

def registro(request):
    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            usuario = form.save()

            # Enviar correo de verificación
            subject = 'Bienvenido a Waly'
            message = f'¡Hola {usuario.nombre_completo}! Te has registrado exitosamente en Waly.'
            from_email = 'walymedellin@gmail.com'
            to = usuario.correo
            send_mail(subject, message, from_email, [to])

            return JsonResponse({'success': True, 'message': '¡Registro exitoso! Se ha enviado un correo de verificación.'})
        else:
            errors = form.errors
            message = errors['correo'][0] if 'correo' in errors else errors['usuario'][0]
            return JsonResponse({'success': False, 'message': message})
    else:
        form = RegistroForm()
    return render(request, 'registro.html', {'form': form})
def inicio(request):
    return render(request, 'inicio.html')


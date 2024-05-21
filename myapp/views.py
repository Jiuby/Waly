from django.shortcuts import render, redirect
from django.core.mail import send_mail
from .forms import RegistroForm, LoginForm
from django.contrib.auth import authenticate, login
from django.http import JsonResponse, HttpResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
import re

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
                return redirect('inicio')  # Redirige a la vista 'inicio'
            else:
                messages.error(request, 'Usuario o contraseña incorrectos.')
        else:
            messages.error(request, 'Usuario o Contraseña Incorrecta.')  # Añade este mensaje
    else:
        form = LoginForm()

    return render(request, 'login.html', {'form': form})



def registro(request):
    if request.method == 'POST':
        form = RegistroForm(request.POST)
        if form.is_valid():
            usuario = form.save(commit=False)  # No guardes el usuario todavía
            password = form.cleaned_data.get('contraseña')

            # Verificar si la contraseña cumple con los requisitos
            password_regex = re.compile(r'^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$')
            if not password_regex.match(password):
                return JsonResponse({'success': False, 'message': 'La contraseña debe tener al menos 6 caracteres, 1 mayúscula y 1 número'})

            usuario.set_password(password)  # Hashea y guarda la contraseña
            usuario.save()  # Ahora puedes guardar el usuario

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




@login_required(login_url='login')  # Redirige a 'login' si el usuario no ha iniciado sesión
def inicio(request):
    return render(request, 'inicio.html', {'nombre_completo': request.user.nombre_completo, 'correo': request.user.correo})

@login_required(login_url='login')  # Redirige a 'login' si el usuario no ha iniciado sesión
def faq(request):
    return render(request, 'faq.html', {'nombre_completo': request.user.nombre_completo, 'correo': request.user.correo})

@login_required(login_url='login')  # Redirige a 'login' si el usuario no ha iniciado sesión
def configuracion(request):
    return render(request, 'configuracion.html', {'nombre_completo': request.user.nombre_completo, 'correo': request.user.correo})
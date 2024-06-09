from django.shortcuts import render, redirect, get_object_or_404
from django.core.mail import send_mail
from .forms import RegistroForm, LoginForm, UpdateUserForm, actualizarPreferencias
from django.contrib.auth import authenticate, login
from django.http import JsonResponse, HttpResponse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from rest_framework import response
from .models import Usuario
from .serializers import UsuarioSerializer
from django.views.decorators.csrf import csrf_exempt
import json
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
    user = request.user
    fields = ['empatia', 'concentracion', 'creatividad', 'emociones', 'adaptabilidad', 'gestion']
    fields2 = ['auditivo', 'visual', 'memoria_fotografica', 'practico', 'lectura_escritura', 'aprendizaje_logico']
    max_field = max(fields2, key=lambda f: getattr(user, f))
    min_field = min(fields, key=lambda f: getattr(user, f))
    visual_porcentaje = (user.visual / 300) * 100
    auditivo_porcentaje = (user.auditivo / 300) * 100
    memoria_fotografica_porcentaje = (user.memoria_fotografica / 300) * 100
    emociones_porcentaje = (user.emociones / 300) * 100
    practico_porcentaje = (user.practico / 300) * 100
    lectura_escritura_porcentaje = (user.lectura_escritura / 300) * 100
    aprendizaje_logico_porcentaje = (user.aprendizaje_logico / 300) * 100
    concentracion_porcentaje = (user.concentracion / 300) * 100
    creatividad_porcentaje = (user.creatividad / 300) * 100
    adaptabilidad_porcentaje = (user.adaptabilidad / 300) * 100
    gestion_porcentaje = (user.gestion / 300) * 100
    empatia_porcentaje = (user.empatia / 300) * 100
    return render(request, 'inicio.html', {
        'nombre_completo': request.user.nombre_completo,
        'correo': request.user.correo,
        'ultimavez': request.user.last_login,
        'auditivo': request.user.auditivo,
        'visual': request.user.visual,
        'memoria_fotografica': request.user.memoria_fotografica,
        'emociones': request.user.emociones,
        'practico': request.user.practico,
        'lectura_escritura': request.user.lectura_escritura,
        'aprendizaje_logico': request.user.aprendizaje_logico,
        'concentracion': request.user.concentracion,
        'creatividad': request.user.creatividad,
        'adaptabilidad': request.user.adaptabilidad,
        'gestion': request.user.gestion,
        'empatia':request.user.empatia,
        'min_field': min_field,
        'max_field': max_field,
        'visual_porcentaje': visual_porcentaje,
        'auditivo_porcentaje': auditivo_porcentaje,
        'memoria_fotografica_porcentaje': memoria_fotografica_porcentaje,
        'emociones_porcentaje': emociones_porcentaje,
        'practico_porcentaje': practico_porcentaje,
        'lectura_escritura_porcentaje': lectura_escritura_porcentaje,
        'aprendizaje_logico_porcentaje': aprendizaje_logico_porcentaje,
        'concentracion_porcentaje': concentracion_porcentaje,
        'creatividad_porcentaje': creatividad_porcentaje,
        'adaptabilidad_porcentaje': adaptabilidad_porcentaje,
        'gestion_porcentaje': gestion_porcentaje,
        'empatia_porcentaje': empatia_porcentaje


    })

@login_required(login_url='login')  # Redirige a 'login' si el usuario no ha iniciado sesión
def faq(request):
    return render(request, 'faq.html', {'nombre_completo': request.user.nombre_completo, 'correo': request.user.correo})

@login_required(login_url='login')  # Redirige a 'login' si el usuario no ha iniciado sesión
def preferencias(request):
    form = actualizarPreferencias(request.POST or None, instance=request.user)
    if request.method == 'POST':
        print(form.errors)
        print(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Preferencias actualizadas con éxito')
            return redirect('preferencias')
        else:
            messages.error(request, 'Hubo un error al actualizar las preferencias')
    else:
        form = UpdateUserForm(instance=request.user)
    return render(request, 'preferencias.html', {'nombre_completo': request.user.nombre_completo, 'correo': request.user.correo, 'form': form})

@login_required(login_url='login')
def configuracion(request):
    form = UpdateUserForm(request.POST or None, instance=request.user)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            messages.success(request, 'Información actualizada con éxito')
        else:
            for field, errors in form.errors.items():
                for error in errors:
                    messages.error(request, error)
        return redirect('configuracion')  # Redirige al usuario a la misma página
    return render(request, 'cambioContraseña.html', {'nombre_completo': request.user.nombre_completo, 'correo': request.user.correo, 'contraseña': request.user.contraseña, 'usuario': request.user.usuario})
def custom_404_view(request, exception):
    return render(request, '404.html')



@login_required(login_url='login')
def graficas(request):
    # Obtener los datos del usuario
    datos_usuario = {
        'auditivo': request.user.auditivo,
        'visual': request.user.visual,
        'memoria_fotografica': request.user.memoria_fotografica,
        'emociones': request.user.emociones,
        'practico': request.user.practico,
        'lectura_escritura': request.user.lectura_escritura,
        'aprendizaje_logico': request.user.aprendizaje_logico,
        'concentracion': request.user.concentracion,
        'creatividad': request.user.creatividad,
        'adaptabilidad': request.user.adaptabilidad,
        'gestion': request.user.gestion,
        'empatia':request.user.empatia,
    }
    return render(request, 'graficas.html', {'auditivo': request.user.auditivo, 'visual': request.user.visual, 'memoria_fotografica': request.user.memoria_fotografica, 'emociones': request.user.emociones, 'practico': request.user.practico, 'lectura_escritura': request.user.lectura_escritura, 'aprendizaje_logico': request.user.aprendizaje_logico, 'concentracion': request.user.concentracion, 'creatividad': request.user.creatividad, 'adaptabilidad': request.user.adaptabilidad, 'gestion': request.user.gestion, 'empatia': request.user.empatia})
@login_required(login_url='login')
def programas(request):
    return render(request, 'programas.html')

@login_required(login_url='login')
def videos(request):
    return render(request, 'videos.html')

@login_required(login_url='login')
def visual(request):
    return render(request, 'actividades/visual.html')

@login_required(login_url='login')
def empatia(request):
    return render(request, 'actividades/empatia.html')

@login_required(login_url='login')
def concentracion(request):
    return render(request, 'actividades/concentracion.html')

@login_required(login_url='login')
def creatividad(request):
    return render(request, 'actividades/creatividad.html')

@login_required(login_url='login')
def emociones(request):
    return render(request, 'actividades/emociones.html')

@login_required(login_url='login')
def adaptabilidad(request):
    return render(request, 'actividades/adaptabilidad.html')

@login_required(login_url='login')
def gestion(request):
    return render(request, 'actividades/gestion.html')

@login_required(login_url='login')
def memoria_fotografica(request):
    return render(request, 'actividades/memoria_fotografica.html')

@login_required(login_url='login')
def practico(request):
    return render(request, 'actividades/practico.html')

@login_required(login_url='login')
def lectura_escritura(request):
    return render(request, 'actividades/lectura_escritura.html')

@login_required(login_url='login')
def aprendizaje_logico(request):
    return render(request, 'actividades/aprendizaje_logico.html')
@login_required(login_url='login')
def auditiva(request):
    return render(request, 'actividades/auditivo.html')

@login_required(login_url='login')
def actividades(request):
    return render(request, 'actividades/actividades.html')

def index(request):
    return render(request, 'landing/index.html')

def acerca(request):
    return render(request, 'landing/about.html')

def contenido(request):
    return render(request, 'landing/courses.html')

@login_required(login_url='login')
def test(request):
    return render(request, 'test.html')

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


@login_required
@csrf_exempt
def update_scores(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_profile = get_object_or_404(Usuario, usuario=request.user.usuario)

            # Actualizar los campos con los puntos recibidos
            for field, value in data.items():
                if hasattr(user_profile, field):
                    setattr(user_profile, field, value)

            user_profile.save()
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})
    return JsonResponse({'status': 'invalid request'}, status=400)

def get_user_data(request):
    user = Usuario.objects.get(username=request.user.username)  # Obtiene el usuario actual
    data = {
        'visual': user.visual,
        'auditivo': user.auditivo,
        'memoria_fotografica': user.memoria_fotografica,
        'practico': user.practico,
        'lectura_escritura': user.lectura_escritura,
        'aprendizaje_logico': user.aprendizaje_logico,
    }
    return JsonResponse(data)
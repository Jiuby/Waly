from django.contrib.auth.models import User
from django.shortcuts import render
from django.core.mail import send_mail
from django.http import JsonResponse
# Create your views here.

def login(request):
    return render(request, 'login.html')



from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib.auth.models import User  # Importa el modelo de usuario de Django

def registro(request):
    if request.method == 'POST':
        nombre_completo = request.POST.get('nombre_completo')
        correo = request.POST.get('correo')
        usuario = request.POST.get('usuario')
        contraseña = request.POST.get('contraseña')
        fecha_nacimiento = request.POST.get('fecha_nacimiento')
        genero = request.POST.get('genero')

        # Guardar el usuario en la base de datos
        nuevo_usuario = User.objects.create_user(username=usuario, email=correo, password=contraseña)
        nuevo_usuario.first_name = nombre_completo
        nuevo_usuario.save()

        # Lógica para enviar el correo de verificación
        if fecha_nacimiento < '2004-05-07':  # Cambia la fecha según la edad mínima
            destinatario = correo_acudiente
        else:
            destinatario = correo

        # Aquí especifica el correo desde el cual se enviará la verificación
        correo_envio = 'mrjiuby@gmail.com'  # Reemplaza 'tucorreo@gmail.com' con el correo de origen deseado

        send_mail(
            'Verificación de correo electrónico',
            'Por favor, haga clic en el enlace para verificar su correo electrónico.',
            correo_envio,  # Correo de origen
            [destinatario],
            fail_silently=False,
        )

        return render(request, 'registro.html', {'mensaje_enviado': True})
    else:
        return render(request, 'registro.html')




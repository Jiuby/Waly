"""
URL configuration for waly project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp import views as myapp_views
from django.contrib.auth import views as auth_views
from django.conf.urls import handler404
from myapp.views import custom_404_view

handler404 = custom_404_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', myapp_views.index, name='index'),
    path('get_user_data/', myapp_views.get_user_data, name='get_user_data'),
    path('acerca/', myapp_views.acerca, name='acerca'),
    path('contenido/', myapp_views.contenido, name='contenido'),
    path('login/', myapp_views.login_view, name='login'),
    path('registro/', myapp_views.registro, name='registro'),
    path('inicio/', myapp_views.inicio, name='inicio'),
    path('faq/', myapp_views.faq, name='faq'),
    path('configuracion/', myapp_views.configuracion, name='configuracion'),
    path('preferencias/', myapp_views.preferencias, name='preferencias'),
    path('404/', myapp_views.custom_404_view, name='404'),
    path('graficas/', myapp_views.graficas, name='graficas'),
    path('programas/', myapp_views.programas, name='programas'),
    path('videos/', myapp_views.videos, name='videos'),
    path('visual/', myapp_views.visual, name='visual'),
    path('empatia/', myapp_views.empatia, name='empatia'),
    path('concentracion/', myapp_views.concentracion, name='concentracion'),
    path('creatividad/', myapp_views.creatividad, name='creatividad'),
    path('emociones/', myapp_views.emociones, name='emociones'),
    path('adaptabilidad/', myapp_views.adaptabilidad, name='adaptabilidad'),
    path('gestion/', myapp_views.gestion, name='gestion'),
    path('auditivo/', myapp_views.auditiva, name='auditivo'),
    path('memoria_fotografica/', myapp_views.memoria_fotografica, name='memoria_fotografica'),
    path('practico/', myapp_views.practico, name='practico'),
    path('lectura_escritura/', myapp_views.lectura_escritura, name='lectura_escritura'),
    path('aprendizaje_logico/', myapp_views.aprendizaje_logico, name='aprendizaje_logico'),
    path('actividades/', myapp_views.actividades, name='actividades'),
    path('test/', myapp_views.test, name='test'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),
    path('', myapp_views.index, name='index'),
    path('update_scores/', myapp_views.update_scores, name='update_scores'),


]

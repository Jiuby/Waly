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
    path('login/', myapp_views.login_view, name='login'),
    path('registro/', myapp_views.registro, name='registro'),
    path('inicio/', myapp_views.inicio, name='inicio'),
    path('faq/', myapp_views.faq, name='faq'),
    path('configuracion/', myapp_views.configuracion, name='configuracion'),
    path('preferencias/', myapp_views.preferencias, name='preferencias'),
    path('404/', myapp_views.custom_404_view, name='404'),
    path('graficas/', myapp_views.graficas, name='graficas'),
    path('logout/', auth_views.LogoutView.as_view(next_page='login'), name='logout'),

]

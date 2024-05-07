from django.shortcuts import render

# Create your views here.

def login(request):
    return render(request, 'login.html')

def registro(request):
    return render(request, 'registro.html')
from django.test import TestCase, Client
from django.urls import reverse
from django.contrib.auth.models import User
from myapp.forms import LoginForm, RegistroForm

class LoginTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.login_url = reverse('login')  # use the name you've defined in your urlpatterns
        self.user = User.objects.create_user(username='testuser', password='12345')

    def test_correct_login(self):
        response = self.client.post(self.login_url, {'usuario': 'testuser', 'contraseña': '12345'})
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(str(response.content, encoding='utf8'), {'success': True, 'message': 'Usuario o contraseña Correcta.'})

    def test_wrong_login(self):
        response = self.client.post(self.login_url, {'usuario': 'wronguser', 'contraseña': 'wrongpass'})
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(str(response.content, encoding='utf8'), {'success': False, 'message': 'Usuario o contraseña incorrectos.'})

class RegistrationTest(TestCase):
    def setUp(self):
        self.client = Client()
        self.register_url = reverse('registro')  # use the name you've defined in your urlpatterns

    def test_registration(self):
        response = self.client.post(self.register_url, {'usuario': 'testuser', 'correo': 'testuser@test.com', 'contraseña': '12345'})
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(str(response.content, encoding='utf8'), {'success': True, 'message': '¡Registro exitoso! Se ha enviado un correo de verificación.'})

    def test_registration_with_existing_username(self):
        User.objects.create_user(username='testuser', password='12345')
        response = self.client.post(self.register_url, {'usuario': 'testuser', 'correo': 'testuser2@test.com', 'contraseña': '12345'})
        self.assertEqual(response.status_code, 200)
        self.assertJSONEqual(str(response.content, encoding='utf8'), {'success': False, 'message': 'A user with that username already exists.'})
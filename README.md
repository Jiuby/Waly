
# Waly

Programa acerca el analisis y el estudio de las metodologias de estudio para la gente autista, con varias actividades para poder desarollar el aprendizaje del usuario



## Deployment

Para desplegar el proyecto primero copiarlo

```bash
  git clone https://github.com/Jiuby/Waly.git
```
Luego instalar las dependencias
```bash
  pip install -r requirements.txt
```
luego tener instalado XAMPP y crear una base de datos llamada waly y en la consola del proyecto escribir lo siguiente

```bash
  python manage.py makemigrations
  python manage.py migrate
  python manage.py makemigrations
  python manage.py migrate

```
normalmente suelo realizarlo asi por seguridad

luego ejecutarlo

```bash
  python manage.py runserver

```

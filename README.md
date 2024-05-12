
# Waly

Procedimiento de instalacion




## Deployment

Para desplegar el proyecto primero copiarlo

```bash
  git clone https://github.com/Jiuby/Waly.git
```
Luego instalar las dependencias
```bash
  python pip install -r requirements.txt
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
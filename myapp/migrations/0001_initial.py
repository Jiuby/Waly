# Generated by Django 4.2.13 on 2024-05-13 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_completo', models.CharField(max_length=100)),
                ('correo', models.EmailField(max_length=254, unique=True)),
                ('usuario', models.CharField(max_length=50, unique=True)),
                ('contraseña', models.CharField(max_length=100)),
                ('fecha_nacimiento', models.DateField()),
                ('genero', models.CharField(max_length=20)),
            ],
        ),
    ]

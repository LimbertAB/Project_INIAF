# Generated by Django 2.2.6 on 2020-06-05 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Formulario',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('id_usuario', models.IntegerField()),
                ('id_movilidad', models.IntegerField()),
                ('fecha', models.DateTimeField()),
                ('descripcion', models.CharField(max_length=999)),
                ('lugar', models.CharField(max_length=900)),
                ('fecha_salida', models.DateTimeField()),
                ('fecha_llegada', models.DateTimeField()),
                ('precio_unitario', models.FloatField()),
                ('precio_cantidad', models.FloatField()),
                ('precio_total', models.FloatField()),
                ('numero_memo', models.IntegerField()),
                ('estado', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]

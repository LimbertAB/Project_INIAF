# Generated by Django 2.2.6 on 2020-06-13 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Programa',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=900)),
                ('proyecto', models.CharField(max_length=900)),
                ('actividad', models.CharField(max_length=500)),
                ('descripcion', models.CharField(max_length=900)),
                ('estado', models.BooleanField(default=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'ordering': ['nombre'],
            },
        ),
    ]

# Generated by Django 2.2.6 on 2020-06-05 23:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('partida', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='partida',
            options={'ordering': ['numero']},
        ),
    ]
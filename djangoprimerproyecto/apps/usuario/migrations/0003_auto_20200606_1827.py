# Generated by Django 2.2.6 on 2020-06-06 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0002_auto_20200605_1942'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuario',
            name='nombre',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='unidad',
            field=models.CharField(default='Semillas', max_length=200),
        ),
    ]

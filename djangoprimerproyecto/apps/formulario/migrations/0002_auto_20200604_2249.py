# Generated by Django 2.2.6 on 2020-06-05 02:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0001_initial'),
        ('movilidad', '0001_initial'),
        ('programa', '0002_auto_20200604_2249'),
        ('formulario', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='formulario',
            name='id_usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='usuario.Usuario'),
        ),
        migrations.AlterField(
            model_name='formulario',
            name='id_movilidad',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='movilidad.Movilidad'),
        ),
        migrations.AddField(
            model_name='formulario',
            name='id_programa',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='programa.Programa'),
        ),
    ]

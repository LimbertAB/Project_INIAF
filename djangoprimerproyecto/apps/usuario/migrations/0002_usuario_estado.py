# Generated by Django 2.2.6 on 2019-12-05 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('usuario', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usuario',
            name='estado',
            field=models.BooleanField(default=True),
        ),
    ]
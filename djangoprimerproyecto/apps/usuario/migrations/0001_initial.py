# Generated by Django 2.2.7 on 2019-11-16 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=200)),
                ('ci', models.IntegerField()),
                ('password', models.CharField(max_length=200)),
            ],
        ),
    ]
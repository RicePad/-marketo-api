# Generated by Django 2.1.15 on 2020-01-28 19:01

import core.storage_backends
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20200123_2105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(storage=core.storage_backends.PublicMediaStorage(), upload_to=''),
        ),
    ]

# Generated by Django 2.1.15 on 2020-01-22 19:08

import core.storage_backends
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0021_delete_avatar'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.FileField(storage=core.storage_backends.PublicMediaStorage(), upload_to=''),
        ),
    ]

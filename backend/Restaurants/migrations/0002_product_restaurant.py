# Generated by Django 5.1 on 2024-09-17 12:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Restaurants', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='restaurant',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='Restaurants.restaurants'),
        ),
    ]
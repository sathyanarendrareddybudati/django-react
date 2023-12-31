# Generated by Django 4.1.7 on 2023-09-06 08:01

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.AutoField(db_column='uid', primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='Email')),
                ('name', models.CharField(max_length=200)),
                ('phone_number', models.CharField(blank=True, db_column='mobile_number', db_index=True, max_length=20, validators=[django.core.validators.RegexValidator(message='Please enter a valid phone number. Up to 13 digits allowed.', regex='^\\+?1?[6789]\\d{9,12}$')])),
                ('address', models.CharField(max_length=255)),
                ('college', models.CharField(max_length=255)),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

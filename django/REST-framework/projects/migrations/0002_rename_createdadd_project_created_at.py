# Generated by Django 5.0.7 on 2024-07-23 08:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='createdAdd',
            new_name='created_at',
        ),
    ]
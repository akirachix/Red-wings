# Generated by Django 4.1.2 on 2022-10-25 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('redwingsapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donor',
            name='first_name',
            field=models.CharField(max_length=26),
        ),
    ]

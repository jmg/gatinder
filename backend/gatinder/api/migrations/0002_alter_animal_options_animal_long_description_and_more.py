# Generated by Django 4.0.6 on 2022-07-29 04:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='animal',
            options={'ordering': ['-created_at'], 'verbose_name': 'Animal', 'verbose_name_plural': 'Animales'},
        ),
        migrations.AddField(
            model_name='animal',
            name='long_description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='animalimage',
            name='image',
            field=models.ImageField(upload_to='static/images/'),
        ),
    ]
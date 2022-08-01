from django.db import models

# Create your models here.

class Animal(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    published = models.BooleanField(default=True, verbose_name='Publicado')

    name = models.CharField(max_length=255, null=True, blank=True, verbose_name='Nombre')
    age = models.CharField(max_length=255, null=True, blank=True, verbose_name='Edad')
    subtitle = models.CharField(max_length=255, null=True, blank=True, verbose_name='Subtitulo')
    sex = models.CharField(max_length=1, choices=[("H", "Hembra"), ("M", "Macho")], verbose_name='Sexo')

    description = models.CharField(max_length=255, null=True, blank=True, verbose_name='Descripción linea 1')
    description_2 = models.CharField(max_length=255, null=True, blank=True, verbose_name='Descripción linea 2')

    long_description = models.TextField(null=True, blank=True, verbose_name='Descripción larga')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Animal"
        verbose_name_plural = "Animales"
        ordering = ["-created_at"]


class AnimalImage(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='static/images/', verbose_name='Imagen')

    def __str__(self):
        return self.animal.name

    class Meta:
        verbose_name = "Foto"
        verbose_name_plural = "Fotos"
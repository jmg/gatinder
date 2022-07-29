from django.db import models

# Create your models here.

class Animal(models.Model):

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    published = models.BooleanField(default=True)

    name = models.CharField(max_length=255, null=True, blank=True)
    age = models.CharField(max_length=255, null=True, blank=True)
    subtitle = models.CharField(max_length=255, null=True, blank=True)
    sex = models.CharField(max_length=1, choices=[("H", "Hembra"), ("M", "Macho")])

    description = models.CharField(max_length=255, null=True, blank=True)
    description_2 = models.CharField(max_length=255, null=True, blank=True)

    long_description = models.TextField(null=True, blank=True)

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
    image = models.ImageField(upload_to='static/images/')

    def __str__(self):
        return self.animal.name
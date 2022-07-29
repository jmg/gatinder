from django.conf import settings
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from api.models import Animal, AnimalImage
from rest_framework import viewsets
from django.db.models import Count


class AnimalSerializer(ModelSerializer):

    images = serializers.SerializerMethodField()
    sex = serializers.SerializerMethodField()

    class Meta:
        model = Animal
        fields = '__all__'

    def get_images(self, obj):

        animals = AnimalImage.objects.filter(animal=obj.id)
        return ["{}{}".format(settings.SSL_HOST, animal.image.url) for animal in animals]

    def get_sex(self, obj):

        return obj.get_sex_display()


class AnimalsViewSet(viewsets.ModelViewSet):

    queryset = Animal.objects.filter(
        published=True
    ).annotate(
        count_images=Count('animalimage')
    ).filter(count_images__gte=1)

    serializer_class = AnimalSerializer
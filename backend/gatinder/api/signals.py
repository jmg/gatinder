from django.db.models.signals import post_save
from api.models import Animal
from django.dispatch import receiver
from api.utils import invalidate_cache


@receiver(post_save, sender=Animal)
def update_animal(sender, instance, **kwargs):

    invalidate_cache()
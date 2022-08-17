from threading import Thread
from django.conf import settings
import requests
import time


def async_invalid_cache():

    time.sleep(1)
    url = "{}/api/revalidate".format(settings.FRONT_END_APP_URL)
    response = requests.get(url, headers={"secret": settings.INVALIDATE_CACHE_SECRET_KEY})

def invalidate_cache():

    Thread(target=async_invalid_cache).start()

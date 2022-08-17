from django.conf import settings
import requests


def invalidate_cache():

    url = "{}/api/revalidate".format(settings.FRONT_END_APP_URL)
    print ("Revalidating cache")
    response = requests.get(url, headers={"secret": settings.INVALIDATE_CACHE_SECRET_KEY})
    print (response.content)
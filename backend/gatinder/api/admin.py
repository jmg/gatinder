from django.contrib import admin
from api.models import Animal, AnimalImage


class AnimalImageAdmin(admin.StackedInline):

    model = AnimalImage


class AnimalAdmin(admin.ModelAdmin):

    list_display = ["name", "sex", "age", "published"]
    list_editable = ["published"]
    inlines = [AnimalImageAdmin]


admin.site.register(Animal, AnimalAdmin)
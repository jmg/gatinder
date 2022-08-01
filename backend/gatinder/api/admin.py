from django import forms
from django.conf import settings
from django.contrib import admin
from api.models import Animal, AnimalImage
from django.contrib.auth.models import Group, User
from tinymce.widgets import TinyMCE


class AnimalAdminForm(forms.ModelForm):

    long_description = forms.CharField(widget=TinyMCE(attrs={'cols': 80, 'rows': 30}))

    class Meta:
        model = Animal
        fields = '__all__'


class AnimalImageAdmin(admin.StackedInline):

    model = AnimalImage


class AnimalAdmin(admin.ModelAdmin):

    list_display = ["name", "sex", "age", "published"]
    list_editable = ["published"]
    inlines = [AnimalImageAdmin]

    form = AnimalAdminForm


admin.site.register(Animal, AnimalAdmin)

admin.site.unregister(Group)
admin.site.unregister(User)

admin.site.site_header = 'Gatinder Admin'
admin.site.index_title = 'Gatinder'
admin.site.site_title = 'Gatinder Admin'



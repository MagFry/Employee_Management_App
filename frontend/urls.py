from django.urls import path
from . import views
from django.conf.urls import include, url


urlpatterns = [
    path('', views.index)
]
from django.urls import path, include
from .views import index
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from .views import UserRegistrationAPI, UserLoginAPI

urlpatterns = [
    path('', index, name='index'),
    path('register/',UserRegistrationAPI.as_view(),name='registration'),
    path('login/',UserLoginAPI.as_view(),name='login'),
]


from django.urls import path
from . import views

urlpatterns = [
    path('api/calculate/', views.calculate, name='calculate'),
    path('api/usage-history/', views.get_usage_history, name='usage_history'),
]

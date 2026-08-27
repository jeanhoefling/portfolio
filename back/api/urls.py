"""
Rotas do app 'api'.

Espelham diretamente as páginas do frontend:
  /certificados -> GET /api/certificados/
  /experiencias -> GET /api/depoimentos/ e /api/experiencias/
  /contato      -> POST /api/contato/
"""
from django.urls import path

from api import views

urlpatterns = [
    path('certificados/', views.listar_certificados, name='listar_certificados'),
    path('depoimentos/', views.listar_depoimentos, name='listar_depoimentos'),
    path('experiencias/', views.listar_experiencias, name='listar_experiencias'),
    path('contato/', views.receber_contato, name='receber_contato'),
]

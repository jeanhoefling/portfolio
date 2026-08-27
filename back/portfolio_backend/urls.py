"""
URLs raiz do projeto.

Toda a API fica namespaced sob /api/, delegada para o app 'api'.
Isso deixa claro, desde já, onde futuras rotas (autenticação, admin,
outros apps) devem entrar.
"""
from django.urls import include, path

urlpatterns = [
    path('api/', include('api.urls')),
]

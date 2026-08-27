"""
Configurações do projeto Django (portfolio_backend).

Este backend está, propositalmente, em um estágio inicial:
- sem banco de dados configurado (usa apenas os apps padrão que não
  exigem persistência);
- sem autenticação de usuários;
- sem Django REST Framework ainda.

A estrutura foi pensada para que adicionar esses recursos no futuro seja
simples: basta configurar DATABASES, adicionar 'rest_framework' e
'django.contrib.auth' às apps quando forem realmente necessários.
"""
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# ATENÇÃO: troque por uma chave segura e mantenha em segredo em produção
# (idealmente via variável de ambiente).
SECRET_KEY = 'django-insecure-troque-esta-chave-antes-de-ir-para-producao'

DEBUG = True

ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.staticfiles',
    'api',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'portfolio_backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
            ],
        },
    },
]

WSGI_APPLICATION = 'portfolio_backend.wsgi.application'

# Sem banco de dados por enquanto. Quando for adicionar um (ex: PostgreSQL),
# basta preencher este dicionário com o engine e as credenciais.
DATABASES = {}

LANGUAGE_CODE = 'pt-br'
TIME_ZONE = 'America/Sao_Paulo'
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# Em desenvolvimento, o frontend (Vite, porta 5173) precisa poder chamar
# esta API. Quando o projeto crescer, instale django-cors-headers e
# configure CORS_ALLOWED_ORIGINS corretamente em vez de liberar tudo.
CORS_ALLOW_ALL_ORIGINS = DEBUG

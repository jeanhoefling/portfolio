"""
Views da API.

Todas as views atuais são funções simples que retornam JSON estático.
Isso é intencional: o objetivo neste momento é apenas expor as rotas
que o frontend vai consumir no futuro, no formato correto, sem ainda
depender de banco de dados.

Quando o projeto evoluir para usar Django REST Framework + banco de
dados, o caminho natural é:
  1. criar models (Certificado, Depoimento, Experiencia) em api/models.py;
  2. criar serializers correspondentes em api/serializers.py;
  3. trocar estas funções por generics/ViewSets do DRF (ex: ListAPIView);
  4. remover os módulos em api/data/, que deixarão de ser necessários.

Nenhuma rota do frontend precisará mudar quando isso acontecer, pois o
formato do JSON retornado já foi definido para ser compatível.
"""
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_http_methods

from api.data.certificados import CERTIFICADOS
from api.data.depoimentos import DEPOIMENTOS
from api.data.experiencias import EXPERIENCIAS


@require_GET
def listar_certificados(request):
    return JsonResponse(CERTIFICADOS, safe=False)


@require_GET
def listar_depoimentos(request):
    return JsonResponse(DEPOIMENTOS, safe=False)


@require_GET
def listar_experiencias(request):
    return JsonResponse(EXPERIENCIAS, safe=False)


@require_http_methods(['POST'])
def receber_contato(request):
    """
    Rota preparada para receber o formulário de contato do frontend.

    Por enquanto não persiste nada (não há banco de dados) nem envia
    e-mail de fato — apenas confirma o recebimento. Quando houver
    persistência, salvar aqui um model Mensagem ou disparar um envio de
    e-mail real.
    """
    return JsonResponse(
        {'status': 'recebido', 'detalhe': 'Envio real ainda não implementado.'},
        status=200,
    )

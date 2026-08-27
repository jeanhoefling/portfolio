"""
Dados estáticos de certificados.

Este arquivo existe apenas para o backend ter algo real para retornar
enquanto não há banco de dados. Quando um model Certificado for criado,
a view correspondente deve passar a consultar o banco em vez desta lista,
mantendo o mesmo formato de resposta.
"""

CERTIFICADOS = [
    {
        'id': 1,
        'nome': 'Nome do certificado (exemplo)',
        'instituicao': 'Instituição de exemplo',
        'data': '2026',
        'descricao': 'Descrição breve do que foi aprendido neste certificado.',
        'url': 'https://exemplo.com/certificado',
    },
    {
        'id': 2,
        'nome': 'Segundo certificado (exemplo)',
        'instituicao': 'Outra instituição',
        'data': '2025',
        'descricao': 'Substitua os itens desta lista pelos certificados reais.',
        'url': 'https://exemplo.com/certificado-2',
    },
]

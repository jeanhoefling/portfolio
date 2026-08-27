# Portfólio pessoal — Jean

Monorepo do portfólio pessoal de Jean: frontend em React (estático, hospedado
no GitHub Pages) e backend em Django, preparado para crescer no futuro
(banco de dados, autenticação, API REST completa).

## Objetivo do projeto

Este é um MVP: hoje o frontend é 100% estático e lê seus dados de arquivos
JSON locais. O backend Django já existe e expõe rotas equivalentes, mas
ainda não está conectado ao frontend nem possui banco de dados. A ideia é
que, quando fizer sentido, o frontend passe a consumir a API Django em vez
dos JSONs locais — sem precisar mudar a estrutura de componentes.

```
React (JSONs locais)          [hoje]
   ↓
React → Django API            [próximo passo]
   ↓
React → Django REST API → PostgreSQL   [futuro]
```

## Estrutura do monorepo

```
portfolio/
├── front/     → aplicação React (Vite + Tailwind + React Router)
├── back/      → projeto Django (sem banco de dados por enquanto)
├── .github/workflows/deploy.yml → deploy automático do front no GitHub Pages
└── README.md
```

## Tecnologias utilizadas

**Frontend:** React 18, Vite, React Router (HashRouter), Tailwind CSS.
**Backend:** Django (sem Django REST Framework por enquanto, sem banco de dados).

## Frontend — instalação e execução

```bash
cd front
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
```

### Gerar build de produção

```bash
npm run build      # gera a pasta front/dist
npm run preview    # visualizar o build localmente
```

### Publicar no GitHub Pages

Duas formas, use a que preferir:

**1. Automática (recomendada):** o workflow em
`.github/workflows/deploy.yml` já está configurado. Basta habilitar o
GitHub Pages nas configurações do repositório (Settings → Pages → Source:
"GitHub Actions") e fazer push para a branch `main`. Todo push que altera
algo em `front/` publica o site automaticamente.

**2. Manual, com o pacote `gh-pages`:**

```bash
cd front
npm run deploy
```

**Importante:** em `front/vite.config.js`, o campo `base` está definido como
`'/portfolio/'`. Se o nome do seu repositório no GitHub for diferente,
troque esse valor para `/nome-do-repositorio/`. Se o site for publicado em
`usuario.github.io` (repositório raiz), use `base: '/'`.

O roteamento usa `HashRouter` (URLs como `/#/experiencias`) especificamente
para evitar o problema comum de 404 em GitHub Pages ao acessar uma rota
diretamente ou dar refresh na página.

## Backend — instalação e execução

```bash
cd back
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```

A API sobe em `http://localhost:8000/api/` com as rotas:

- `GET /api/certificados/`
- `GET /api/depoimentos/`
- `GET /api/experiencias/`
- `POST /api/contato/`

Todas retornam dados estáticos por enquanto (definidos em `back/api/data/`),
apenas para deixar o formato da resposta já definido para quando o
frontend passar a consumi-las.

O backend **não precisa ser hospedado agora** — ele existe para já deixar a
estrutura pronta para o próximo passo do projeto.

## Estrutura de pastas

```
front/src/
├── components/   → componentes reutilizáveis (Navbar, cards, carrossel...)
├── pages/        → uma página por rota (Home, Certificados, Experiencias, Contato)
├── data/         → arquivos JSON consumidos pelas páginas
├── styles/       → CSS global (Tailwind)
└── App.jsx       → definição das rotas

back/
├── portfolio_backend/   → configuração do projeto Django (settings, urls)
└── api/
    ├── data/            → dados estáticos temporários (substituir por models no futuro)
    ├── views.py         → uma view por recurso
    └── urls.py          → rotas da API
```

## Onde alterar o conteúdo

| Conteúdo       | Arquivo                                |
|----------------|-----------------------------------------|
| Certificados   | `front/src/data/certificados.json`      |
| Depoimentos    | `front/src/data/depoimentos.json`       |
| Experiências   | `front/src/data/experiencias.json`      |
| Dados pessoais (nome, resumo, tecnologias, links) | `front/src/pages/Home.jsx` (topo do arquivo) |
| E-mail e redes na página de contato | `front/src/pages/Contato.jsx` (topo do arquivo) |

Cada JSON e cada bloco de dados de exemplo no código está marcado com um
comentário indicando que deve ser substituído pelo conteúdo real.

## Como o projeto pode evoluir

1. Adicionar `DATABASES` em `back/portfolio_backend/settings.py` (ex: PostgreSQL).
2. Criar models `Certificado`, `Depoimento`, `Experiencia` em `back/api/`.
3. Instalar Django REST Framework e trocar as views atuais por
   `ListAPIView`/`ViewSet`s com serializers.
4. Remover os arquivos em `back/api/data/`, que deixam de ser necessários.
5. No frontend, trocar os `import ... from '../data/*.json'` por chamadas
   `fetch` para `/api/certificados/`, `/api/depoimentos/` e
   `/api/experiencias/`.
6. Conectar o formulário de contato (`front/src/components/ContatoForm.jsx`)
   ao endpoint real `POST /api/contato/`, que já existe e está pronto para
   receber os dados — falta apenas persistir/enviar por e-mail no backend.
7. Adicionar autenticação, se necessário (ex: para uma área administrativa).

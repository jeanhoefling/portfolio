# Portfólio pessoal — Jean

Monorepo do portfólio pessoal: frontend em React (estático, hospedado
no GitHub Pages) e backend em Django, preparado para crescer no futuro
(banco de dados, autenticação, API REST completa).

## Objetivo do projeto

Este é um MVP: hoje o frontend é 100% estático e lê seus dados de arquivos
JSON locais. O backend Django já existe e expõe rotas equivalentes, mas
ainda não está conectado ao frontend nem possui banco de dados. A ideia é
que, quando fizer sentido, o frontend passe a consumir a API Django em vez
dos JSONs locais — sem precisar mudar a estrutura de componentes.

## Estrutura do monorepo

```
portfolio/
├── front/     → aplicação React (Vite + Tailwind + React Router)
├── back/      → projeto Django (sem banco de dados por enquanto)
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

## Backend — instalação e execução

```bash
cd back
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```

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

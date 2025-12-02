🛒 Nome do Projeto - E-commerce Full Stack

- Uma aplicação completa de E-commerce, incluindo um catálogo de produtos (Backend) e uma interface de usuário (Frontend), utilizando arquitetura de microserviços em Docker.

✨ Tecnologias

- Este projeto Full Stack utiliza o seguinte STACK:

- Backend (API)	NestJS	Framework Node.js para API RESTful.

- Frontend (UI)	Angular	Framework para interface web.

- Banco de Dados	MySQL	Persistência de dados (Produtos e Pedidos).

- Containerização	Docker & Docker Compose	Orquestração do ambiente.

💻 Pré-Requisitos

Para executar este projeto localmente, você precisa ter as seguintes ferramentas instaladas:

- Docker

- Docker Compose

Node.js e npm (Necessário para gerenciamento de dependências locais, se não for rodar o front e back totalmente em Docker)

🛠️ Instalação e Execução
Siga os passos abaixo para iniciar todos os serviços (Frontend, Backend e Banco de Dados) usando Docker Compose.

1. Iniciar os Contêineres

- Navegue até o diretório raiz do projeto e inicie os serviços definidos no docker-compose.yml:

2. Popular o Banco de Dados (Passo Crucial)
  
- Para que o Front-end exiba os produtos, você deve popular o banco de dados acessando a rota específica da API: 

- http://localhost:3000/products/populate

3.Acessos Locais

- Após a inicialização, os serviços estarão disponíveis nas seguintes portas:

- Frontend (Angular) URL: http://localhost:4200	PORTA: 4200

- Backend (NestJS API) URL: http://localhost:3000 PORTA:3000

- Banco de Dados MySQL	Acessível apenas pelo container	PORTA: 3306

- Endpoints da API (Backend - NestJS)

- A API é acessível através da URL base http://localhost:3000.

Gerenciamento de Produtos (/products)

- GET	/products	Retorna a lista completa de produtos disponíveis no catálogo.	200 (OK)

- POST/products/populateInicializa o banco de dados com dados de amostra de produtos.201 (Created)

- Gerenciamento de Pedidos (/orders)

- POST	/orders	Cria um novo pedido no sistema.	201 (Created), 400 (Bad Request)


🤝 Como Contribuir
- Passo 1: Faça um fork (cópia) deste repositório.

- Passo 2: Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).

- Passo 3: Faça o commit das suas alterações.

- Passo 4: Abra um Pull Request.



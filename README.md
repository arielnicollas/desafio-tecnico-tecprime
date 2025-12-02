#🛒 Nome do Projeto - E-commerce Full Stack

Uma aplicação completa de E-commerce, incluindo um catálogo de produtos (Backend) e uma interface de usuário (Frontend), utilizando arquitetura de microserviços em Docker.

✨ Tecnologias

Este projeto Full Stack utiliza o seguinte stack:

Componente	Tecnologia	Observação

Backend (API)	NestJS	Framework Node.js para API RESTful.
Frontend (UI)	Angular	Framework para interface web.
Banco de Dados	MySQL	Persistência de dados (Produtos e Pedidos).
Containerização	Docker & Docker Compose	Orquestração do ambiente.

💻 Pré-Requisitos

Para executar este projeto localmente, você precisa ter as seguintes ferramentas instaladas:

Docker

Docker Compose

Node.js e npm (Necessário para gerenciamento de dependências locais, se não for rodar o front e back totalmente em Docker)

🛠️ Instalação e Execução
Siga os passos abaixo para iniciar todos os serviços (Frontend, Backend e Banco de Dados) usando Docker Compose.

1. Iniciar os Contêineres
Navegue até o diretório raiz do projeto e inicie os serviços definidos no docker-compose.yml:

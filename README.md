# Projeto FT : Quiz, Jogo da Memória e Jogo de Sílabas
Este é um projeto educacional desenvolvido com o objetivo de auxiliar crianças no aprendizado de forma interativa e divertida, através de três jogos principais: **Quiz**, **Jogo da Memória** e **Jogo de Sílabas**.

A aplicação é composta por:

- 🖥️ **Frontend**: React
- 🛠️ **Backend**: NestJS
- 📊 Banco de dados: SQLite

---
## 🚧 Status do Projeto
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge&logo=github)
## 🚀 Funcionalidades

- 🎮 Jogo de Quiz com perguntas e respostas
- 🧠 Jogo da Memória com elementos educacionais
- 🔤 Jogo de formação de palavras com sílabas
- 🧑‍🏫 Sistema de pontuação por usuário
- 🔐 Login de usuário
- 📈 Armazenamento de progresso

---

## 🧩 Tecnologias Utilizadas

### Frontend (React)

- React
- React Router
- Styled-components / CSS Modules (ou outro)

### Backend (NestJS)

- NestJS
- TypeORM / Prisma (dependendo do ORM usado)
- JWT / Passport para autenticação
- SQLite3
- CORS, Middleware, etc.

---

## 🌐 Rotas da API

Prefixo base: `/usr`

| Método | Rota                     | Descrição                                     |
|--------|--------------------------|-----------------------------------------------|
| GET    | `/usr/getAllSyllabs`     | Retorna todas as sílabas disponíveis          |
| POST   | `/usr/insrtQuestion`     | Insere uma nova pergunta no sistema           |
| GET    | `/usr/Question`          | Retorna uma lista de perguntas                |
| GET    | `/usr/QuestionCons`      | Retorna perguntas com consulta específica     |
| POST   | `/usr/checkQuestion`     | Verifica se a resposta enviada está correta   |
| POST   | `/usr/login`             | Realiza o login de usuário                    |
| POST   | `/usr/addPoints`         | Adiciona pontos ao usuário                    |

---

## 🧩 vídeo
https://github.com/user-attachments/assets/39ee76b8-bee1-41d9-a276-97813a48bcc2

# 🎮 Jogo de Quiz
https://github.com/user-attachments/assets/096f9d8e-1578-4be6-9ea7-6272d40174ec
# 🧠 Jogo da Memória
https://github.com/user-attachments/assets/6a09524a-e797-4be0-8a10-4d3d8e2119b2

## 🛠️ Como rodar o projeto

### 🔧 Backend (NestJS)

```bash
# Acesse a pasta do backend
cd back

# Instale as dependências
npm install

# Rode o servidor
npm run start:dev

### 🔧 Frontend (React)

# Acesse a pasta do frontend
cd front

# Instale as dependências
npm install

# Rode o app
npm run start



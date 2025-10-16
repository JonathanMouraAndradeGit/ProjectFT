# 🎓 Projeto Educacional: Quiz, Jogo da Memória e Jogo de Sílabas

Este é um projeto educacional desenvolvido com o objetivo de auxiliar crianças no aprendizado de forma interativa e divertida, através de três jogos principais: **Quiz**, **Jogo da Memória** e **Jogo de Sílabas**.

A aplicação é composta por:

- 🖥️ **Frontend**: React
- 🛠️ **Backend**: NestJS
- 📊 Banco de dados: (adicione aqui, ex: PostgreSQL, MongoDB...)

---

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

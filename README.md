# 🐾 Petshop API

API RESTful desenvolvida com **Express.js** e **TypeScript** para gerenciamento de pets em um petshop.

Este projeto foi criado com fins didáticos, com foco em práticas de desenvolvimento backend usando Node.js + TypeScript, aplicando conceitos de:
- Rotas REST (GET, POST, PUT, DELETE)
- Middleware de autenticação
- Banco de dados em memória
- Tipagem forte com TypeScript

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- TypeScript
- ts-node-dev

---

## 📁 Estrutura do projeto

```
petshop-api/
├── src/
│   ├── index.ts                # Entrada principal
│   ├── routes/
│   │   └── pets.ts             # Rotas da API
│   ├── middleware/
│   │   └── auth.ts             # Middleware de autenticação
│   ├── data/
│   │   └── pets.ts             # Banco de dados em memória
│   └── types/
│       └── Pet.ts              # Tipos TypeScript
├── package.json
├── tsconfig.json
├── .gitignore
```

---

## 🛠️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/petshop-api-ts.git
cd petshop-api-ts
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor

```bash
npm run dev
```

O servidor estará rodando em:  
📍 `http://localhost:3000`

---

## 🔐 Autenticação

Todas as rotas são protegidas por um middleware de autenticação.  
Adicione este header nas requisições:

```
Authorization: Bearer petshop123
```

---

## 🧪 Exemplos de uso

### ▶️ Criar um pet
`POST /pets`

```json
{
  "name": "Rex",
  "species": "Cachorro",
  "breed": "Labrador",
  "vaccinated": true
}
```

### 🔎 Buscar todos os pets
`GET /pets`

### 📍 Buscar um pet por ID
`GET /pets/1`

### ✏️ Atualizar um pet
`PUT /pets/1`

```json
{
  "name": "Rex Atualizado",
  "breed": "Golden Retriever"
}
```

### 💉 Vacinar um pet
`POST /pets/1/vaccinate`

### 🗑️ Deletar um pet
`DELETE /pets/1`

### 🧹 Deletar todos os pets não vacinados
`DELETE /pets/unvaccinated/all`

---

## 📌 Status do projeto

- ✅ Projeto funcional com rotas REST
- ✅ Middleware de autenticação
- ✅ Tipagem com TypeScript
- ⏳ Banco de dados simulado (em memória)
- ❌ Testes automatizados (em breve)
- ❌ Integração com banco real (em breve)

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.  
Feito com 💙 por [Matthew Nascimento](https://github.com/xMattRx)
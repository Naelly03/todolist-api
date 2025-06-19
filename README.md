📋 TodoList API
API REST desenvolvida com AdonisJS v6 para gerenciamento de tarefas, com suporte a usuários, autenticação e organização por pastas.

🚀 Tecnologias
⚙️ AdonisJS v6 (Node.js + TypeScript)

🗄️ SQLite ou PostgreSQL

🐳 Docker (opcional)

🔗 Rotas principais
📂 Folder
GET /folders – Listar pastas

POST /folders – Criar pasta

PUT /folders/:id – Atualizar pasta

DELETE /folders/:id – Excluir pasta

✅ Task
GET /tasks – Listar tarefas

GET /tasks/:id – Obter tarefa por ID

POST /tasks – Criar tarefa

PUT /tasks/:id – Atualizar tarefa

DELETE /tasks/:id – Excluir tarefa

👤 User
POST /users – Criar usuário

GET /users/:id – Consultar usuário

🔑 Session
POST /sessions – Login

⚙️ Como rodar o projeto
bash
Copiar
Editar
# Clone o repositório
git clone https://github.com/NaellyV/todolist-api.git

# Acesse a pasta
cd todolist-api

# Instale as dependências
npm install

# Copie o arquivo de exemplo do ambiente
cp .env.example .env

# Rode as migrations
node ace migration:run

# Inicie o servidor
npm run dev
Acesse: http://localhost:3333

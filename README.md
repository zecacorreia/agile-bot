# 🤖 AgileBot - Facilitador Ágil com IA

O **AgileBot** é um chatbot em **Node.js** que usa **IA local (Ollama + Llama 3)** para auxiliar em **cerimônias e práticas ágeis**.  

Ele ajuda alunos e times a praticarem **Scrum** e outras técnicas ágeis de forma interativa.

---

## 📦 Requisitos

- **Node.js** v18 ou superior  
- **Ollama** instalado no computador (Windows/Mac/Linux)  
- Modelo **Llama 3.1** baixado no Ollama (~5GB)  

---

## ⚡ Instalação

1. Clone este repositório:

```bash
git clone https://github.com/zecacorreia/agile-bot.git
cd agile-bot
```

2. Instale as dependências:

```bash
npm install
```

3. Baixe e rode o modelo no Ollama (uma vez é suficiente):

```bash
ollama run llama3.1
```

---

## 🔧 Configuração

O bot se conecta à API local do Ollama (`127.0.0.1:11434`).
Não é necessário criar `.env` ou inserir chave de API.

Se estiver usando outra porta, ajuste no arquivo `agileBot.js`:

```js
const API_URL = "http://127.0.0.1:11434/api/chat";
```

---

## 🚀 Uso

No terminal, rode:

```bash
node agileBot.js
```

Você verá:

```bash
🤖 AgileBot iniciado! (digite 'sair' para encerrar)
```

Será exibido um **menu interativo** com todas as atividades disponíveis.

---

## 📚 Atividades Suportadas
##### 1. Scrum Assistido por IA (Chatbot Scrum Master)

- O AgileBot simula um Scrum Master virtual

- Lembra sobre reuniões diárias, pergunta sobre progresso e impedimentos

- Sugere melhorias no processo

- Atividade: alunos alimentam a IA com suas User Stories e recebem feedback automatizado

##### 2. Gerador de User Stories com IA

- Escreva funcionalidades em linguagem natural

- O AgileBot converte em User Stories no formato:
`Como [persona], quero [funcionalidade], para [benefício]`

- Também sugere critérios de aceitação

##### 3. Priorização Automática do Backlog

- Forneça funcionalidades + critérios (valor de negócio, esforço, risco)

- O AgileBot organiza o backlog com MoSCoW ou WSJF

- Atividade: comparar backlog humano vs IA

##### 4. Sprint Planning com Estimativas via IA

- O time insere User Stories

- O AgileBot sugere estimativas em pontos (Planning Poker virtual)

- Debate se o time aceita ou ajusta

##### 5. Detecção de Impedimentos com IA

- O time fornece registros de dailys

- A IA identifica padrões de problemas (dependências, gargalos, sobrecarga)

##### 6. Retrospectiva Ágil com Insights da IA

- O time escreve feedbacks sobre a sprint

- O AgileBot organiza em Start / Stop / Continue

- Sugere planos de ação

##### 7. Simulação de Projeto Ágil com Cliente Virtual

- O AgileBot simula o papel de Product Owner ou cliente

- Equipes devem negociar requisitos, esclarecer dúvidas e validar entregas

- Treinamento de comunicação e negociação

##### 8. Gerador de Kanban Automático

- A partir de um backlog textual, a IA gera um quadro Kanban (To Do, Doing, Done)

- Atividade: comparar Kanban da IA com Kanban humano

---

## 📄 Arquivos de Exemplo

O AgileBot usa arquivos `.txt` para rodar simulações:

- backlog.txt → funcionalidades para priorização

- stories.txt → histórias de usuário para planejamento

- daily.txt → registros de daily para detectar impedimentos

- retro.txt → feedbacks de retrospectiva

Exemplo de backlog.txt:

```txt
1. Cadastro de usuários
2. Login com autenticação JWT
3. Upload de documentos
```

---

## ⚙️ Estrutura do Projeto

```bash
agile-bot/
│
├─ agileBot.js       # Código principal do bot
├─ backlog.txt       # Exemplo de backlog para priorização
├─ stories.txt       # User Stories para estimativa
├─ daily.txt         # Registros de dailys
├─ retro.txt         # Feedbacks de retrospectiva
├─ package.json      # Dependências e scripts
└─ README.md         # Este arquivo
```

---

## 💡 Dicas

- Use IPv4 (127.0.0.1) no Windows para evitar ECONNREFUSED ::1

- Deixe o Ollama rodando em background enquanto o bot estiver ativo

- Para mudar o modelo, altere:

```js
const MODEL = "nome_do_modelo";
```

- Salve os .txt em UTF-8 para suportar acentos e caracteres especiais

---

## 📚 Referências

- [Ollama](https://ollama.com/?utm_source=chatgpt.com)
 – Modelo local e API

- [Llama 3](https://www.llama.com/?utm_source=chatgpt.com)
 – Modelo de linguagem
const readline = require("readline");
const fetch = require("node-fetch");

const API_URL = "http://127.0.0.1:11434/api/chat";
const MODEL = "llama3.1";

async function askAI(prompt) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
      stream: false,
    }),
  });

  const data = await response.json();
  return data.message?.content || "⚠️ Erro ao processar resposta da IA.";
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log("\n🤖 AgileBot - Escolha uma atividade:\n");
  console.log("1. Scrum Assistido por IA (Daily, impedimentos, melhorias)");
  console.log("2. Gerador de User Stories com IA");
  console.log("3. Priorização Automática do Backlog (MoSCoW / WSJF)");
  console.log("4. Sprint Planning com Estimativas via IA");
  console.log("5. Detecção de Impedimentos em Dailys");
  console.log("6. Retrospectiva Ágil com Insights (Start/Stop/Continue)");
  console.log("7. Simulação de Projeto Ágil com Cliente Virtual");
  console.log("8. Gerador de Kanban Automático");
  console.log("9. Sair\n");

  rl.question("Digite o número da opção: ", handleMenu);
}

async function handleMenu(option) {
  switch (option) {
    case "1":
      rl.question("Escreva a última atualização do time (Daily):\n", async (daily) => {
        const reply = await askAI(`Atue como Scrum Master. Feedback sobre Daily: ${daily}`);
        console.log("\n🤖 AgileBot:\n", reply);
        showMenu();
      });
      break;

    case "2":
      rl.question("Descreva a funcionalidade em linguagem natural:\n", async (desc) => {
        const reply = await askAI(
          `Transforme em User Story e sugira critérios de aceitação:\n${desc}`
        );
        console.log("\n📘 User Story:\n", reply);
        showMenu();
      });
      break;

    case "3":
      rl.question("Liste funcionalidades separadas por vírgula:\n", async (funcs) => {
        const reply = await askAI(
          `Priorize o backlog com MoSCoW e WSJF:\n${funcs}`
        );
        console.log("\n📊 Backlog Prioritário:\n", reply);
        showMenu();
      });
      break;

    case "4":
      rl.question("Digite uma ou mais User Stories:\n", async (stories) => {
        const reply = await askAI(
          `Sugira estimativas de Planning Poker (pontos) para as User Stories:\n${stories}`
        );
        console.log("\n🎲 Estimativas:\n", reply);
        showMenu();
      });
      break;

    case "5":
      rl.question("Cole registros de Dailys (texto):\n", async (logs) => {
        const reply = await askAI(
          `Detecte impedimentos e gargalos recorrentes nas Dailys:\n${logs}`
        );
        console.log("\n🚧 Impedimentos:\n", reply);
        showMenu();
      });
      break;

    case "6":
      rl.question("Escreva feedbacks da retrospectiva:\n", async (feedbacks) => {
        const reply = await askAI(
          `Organize em Start/Stop/Continue e sugira plano de ação:\n${feedbacks}`
        );
        console.log("\n🔄 Retrospectiva:\n", reply);
        showMenu();
      });
      break;

    case "7":
      rl.question("Digite requisitos ou dúvidas para o cliente virtual:\n", async (q) => {
        const reply = await askAI(
          `Atue como Product Owner. Responda como cliente a esta solicitação:\n${q}`
        );
        console.log("\n👤 Cliente Virtual:\n", reply);
        showMenu();
      });
      break;

    case "8":
      rl.question("Forneça backlog textual para gerar Kanban:\n", async (backlog) => {
        const reply = await askAI(
          `Transforme este backlog em um quadro Kanban (To Do, Doing, Done):\n${backlog}`
        );
        console.log("\n📌 Kanban:\n", reply);
        showMenu();
      });
      break;

    case "9":
      console.log("👋 Encerrando AgileBot. Até mais!");
      rl.close();
      break;

    default:
      console.log("❌ Opção inválida, tente novamente.");
      showMenu();
  }
}

console.log("🚀 AgileBot iniciado!");
showMenu();

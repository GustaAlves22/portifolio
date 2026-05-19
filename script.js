// ============================================
//  TICKER
// ============================================
const msgs = [
  '💻 Desenvolvedor Front-End apaixonado por UI/UX',
  '🌐 O primeiro website do mundo ainda está no ar — info.cern.ch',
  '⚡ Performance, acessibilidade e bom design em cada projeto',
  '🔢 Existem 10 tipos de pessoas: as que entendem binário e as que não',
  '🚀 Disponível para projetos freelance e colaborações',
  '💾 O Apollo 11 chegou à Lua com apenas 4KB de RAM',
  '🎯 HTML · CSS · JavaScript · e muita curiosidade',
  '🐛 Não são bugs — são comportamentos inesperados não documentados',
  '🌍 A internet tem mais de 1 bilhão de websites ativos',
  '⚡ Um relâmpago tem mais de 1 bilhão de volts. CSS tem mais variáveis.',
];

function buildTicker() {
  const track = document.getElementById('tickerTrack');
  const doubled = [...msgs, ...msgs];
  track.innerHTML = doubled.map(m => `<span>${m}</span>`).join('');
}
buildTicker();

// ============================================
//  TABS
// ============================================
function abrirAba(id, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active-btn'));
  document.getElementById(id).classList.add('active');
  if (btn) btn.classList.add('active-btn');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
//  PROJETOS
// ============================================
const projetos = [
  {
    emoji: '🎲',
    titulo: 'Jogo de Ludo',
    desc: 'Jogo interativo de Ludo desenvolvido em JavaScript puro. Sem framework, no braço mesmo.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'http://GameExpoSenac.github.io',
  },
  {
    emoji: '✅',
    titulo: 'Lista de Tarefas',
    desc: 'App de gerenciamento de tarefas com categorias, datas e um visual que não envergonha. Diferente da maioria das to-do lists.',
    tags: ['JavaScript', 'LocalStorage', 'CSS'],
    link: 'https://gustaalves22.github.io/listadetarefas/',
  },
  {
    emoji: '🧠',
    titulo: 'Quiz Interativo',
    desc: 'Quiz de perguntas interativas com lógica de respostas e feedback em tempo real. Um bom desafio para treinar JavaScript.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://gustaalves22.github.io/quiz/',
  },
  {
    emoji: '🚦',
    titulo: 'Quiz de Trânsito — Maio Amarelo',
    desc: 'Quiz educativo sobre segurança no trânsito criado para o Maio Amarelo. Aprenda de forma interativa e divertida.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://gustaalves22.github.io/trabalho-maio-amarelo/',
  },
  {
    emoji: '��',
    titulo: 'Em breve...',
    desc: 'Novo projeto em desenvolvimento. Fique de olho no GitHub para acompanhar o que vem por aí.',
    tags: ['Em breve'],
    link: 'https://github.com/gustaalves22',
  },
];

function renderProjetos() {
  document.getElementById('projetos-container').innerHTML = projetos.map(p => `
    <div class="card">
      <span class="card-emoji">${p.emoji}</span>
      <h3>${p.titulo}</h3>
      <p>${p.desc}</p>
      <div>${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
      <a href="${p.link}" target="_blank">Ver Projeto →</a>
    </div>
  `).join('');
}

// ============================================
//  HERO CARD FLIP
// ============================================
function heroCardClick() {
  document.getElementById('heroCardInner').classList.toggle('flipped');
}

// ============================================
//  FACTS FLIP
// ============================================
function flipCard(card) {
  card.classList.toggle('flipped');
}

// ============================================
//  INIT
// ============================================
window.addEventListener('DOMContentLoaded', () => {
  renderProjetos();
});
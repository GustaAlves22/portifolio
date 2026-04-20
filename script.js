// ============================================
//  CURSOR
// ============================================
const cursorBall = document.getElementById('cursor-ball');
document.addEventListener('mousemove', e => {
  cursorBall.style.left = e.clientX + 'px';
  cursorBall.style.top  = e.clientY + 'px';
});

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
  if (id === 'skills') setTimeout(animateSkillBars, 100);
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
    emoji: '🔭',
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
//  SKILLS
// ============================================
const skills = [
  { icon: '🌐', name: 'HTML',            percent: 88 },
  { icon: '🎨', name: 'CSS',             percent: 82 },
  { icon: '⚡', name: 'JavaScript',      percent: 75 },
  { icon: '🔗', name: 'Git / GitHub',    percent: 70 },
  { icon: '📱', name: 'Responsividade',  percent: 80 },
  { icon: '🎯', name: 'UI / UX Feeling', percent: 77 },
  { icon: '⚙️', name: 'Lógica & Algo.',  percent: 68 },
  { icon: '🐛', name: 'Debug',           percent: 72 },
];

function renderSkills() {
  document.getElementById('skillsGrid').innerHTML = skills.map(s => `
    <div class="skill-item">
      <div class="skill-header">
        <div class="skill-label">
          <span class="skill-icon">${s.icon}</span>
          <span>${s.name}</span>
        </div>
        <span class="skill-percent">${s.percent}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-target="${s.percent}"></div>
      </div>
    </div>
  `).join('');
}

function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
    setTimeout(() => { bar.style.width = bar.dataset.target + '%'; }, i * 80);
  });
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
  renderSkills();
});
function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
      activeTab.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  
  // Ativar a aba "sobre" ao carregar o site
  window.onload = () => showTab("sobre");
  // Função para alternar entre abas

  function abrirAba(abaId) {
    const abas = document.querySelectorAll('.tab');
    abas.forEach(aba => aba.classList.remove('active'));
    document.getElementById(abaId).classList.add('active');
  }
  
  // Inserção dinâmica dos projetos com links
  window.addEventListener('DOMContentLoaded', () => {
    const projetosContainer = document.getElementById('projetos-container');
    projetosContainer.innerHTML = `
      <div class="card">
        <h3>Ludo Game</h3>
        <p>Jogo interativo de Ludo desenvolvido com JavaScript.</p>
        <a href="http://GameExpoSenac.github.io" target="_blank">Ver Projeto</a>
      </div>
      <div class="card">
        <h3>Lista de Tarefas</h3>
        <p>Aplicação de lista de tarefas com categorias, datas e mais.</p>
        <a href="https://gustaalves22.github.io/listadetarefas/" target="_blank">Ver Projeto</a>
      </div>
    `;
  });
  
function toggleActiveClass(element) {
    // Verifica se a classe 'active' já está presente no elemento
    const hasActiveClass = element.classList.contains('active');

    // Adiciona ou remove a classe 'active', dependendo do estado atual
    if (hasActiveClass) {
      element.classList.remove('active');
    } else {
      element.classList.add('active');
    }
  }

  // Adiciona um evento de clique ao botão
  const menuToggle = document.querySelector('#menu-toggle');
  menuToggle.addEventListener('click', () => {
    // Chama a função para alternar a classe 'active'
    toggleActiveClass(document.querySelector('#menu-mobile-toggle'));
    console.log("Oi");
  });
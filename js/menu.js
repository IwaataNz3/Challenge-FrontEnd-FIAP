document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelector(".btn-menu-mobile");
  const menuNavegacao = document.querySelector(".menu-navegacao");
  const body = document.body;

  // Função para alternar o menu
  const toggleMenu = () => {
    const isAtivo = menuNavegacao.classList.toggle("ativo");

    // Acessibilidade: atualiza o aria-expanded se existir
    btnMenu.setAttribute("aria-expanded", isAtivo);

    // Muda o ícone de hambúrguer para um "X" (opcional, usando texto)
    btnMenu.textContent = isAtivo ? "✕" : "☰";

    // Impede o scroll do body quando o menu estiver aberto no mobile
    body.style.overflow = isAtivo ? "hidden" : "auto";
  };

  btnMenu.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que o clique chegue no documento
    toggleMenu();
  });

  // Fecha o menu ao clicar em qualquer link
  const links = document.querySelectorAll(".menu-navegacao a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuNavegacao.classList.contains("ativo")) {
        toggleMenu();
      }
    });
  });

  // Fecha o menu se clicar fora dele
  document.addEventListener("click", (e) => {
    if (
      menuNavegacao.classList.contains("ativo") &&
      !menuNavegacao.contains(e.target)
    ) {
      toggleMenu();
    }
  });

  // Garante que o menu feche se a tela for redimensionada para desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992 && menuNavegacao.classList.contains("ativo")) {
      menuNavegacao.classList.remove("ativo");
      btnMenu.textContent = "☰";
      body.style.overflow = "auto";
    }
  });
});

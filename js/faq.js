// Gerencia o comportamento do Accordion: ao clicar em uma pergunta, 
// expande ou retrai a resposta (alternando a classe "ativo" no elemento pai) 
// e altera o ícone de "+" para "-" de acordo com o estado (aberto/fechado).
const perguntas = document.querySelectorAll(".faq-pergunta");
perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const item = pergunta.parentElement;
    item.classList.toggle("ativo");

    const sinal = pergunta.querySelector("span");
    sinal.textContent = item.classList.contains("ativo") ? "-" : "+";
  });
});
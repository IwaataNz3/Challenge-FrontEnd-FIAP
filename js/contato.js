document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-contato");

  form.addEventListener("submit", (e) => {
    let temErro = false;

    // 1. Limpa mensagens de erro e reseta bordas
    const mensagensAntigas = document.querySelectorAll(".erro-feedback");
    mensagensAntigas.forEach((msg) => msg.remove());

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    nome.style.borderColor = "";
    email.style.borderColor = "";
    mensagem.style.borderColor = "";

    // 2. Validação do Nome (mínimo 3 letras)
    if (nome.value.trim().length < 3) {
      temErro = true;
      exibirErro(nome, "Mínimo de 3 caracteres.");
    }

    // 3. Validação do E-mail (Regex simples)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      temErro = true;
      exibirErro(email, "E-mail inválido.");
    }

    // 4. Validação da Mensagem (mínimo 10 letras)
    if (mensagem.value.trim().length < 10) {
      temErro = true;
      exibirErro(mensagem, "Mínimo de 10 caracteres.");
    }

    // 5. Checagem Final
    // Bloqueia SEMPRE o envio padrão da página para não redirecionar
    e.preventDefault(); 
    
    if (!temErro) {
      // Se não houver erro, exibe o alerta de sucesso e limpa o formulário
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }
  });

  // Função minimalista para inserir o texto em vermelho
  function exibirErro(elemento, texto) {
    const span = document.createElement("span");
    span.className = "erro-feedback";
    span.textContent = texto;
    span.style.color = "#ff4d4d";
    span.style.fontSize = "0.8rem";
    span.style.marginTop = "5px";
    span.style.fontWeight = "600";

    // Insere logo abaixo do input/textarea
    elemento.parentElement.appendChild(span);
    elemento.style.borderColor = "#ff4d4d";
  }
});
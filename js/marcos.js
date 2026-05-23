document.addEventListener("DOMContentLoaded", () => {
  // Simulação de dados vindos do Motor de Reputação
  const dadosUsuario = {
    acoesRealizadas: 7,
    diasConsistentes: 12,
    primeiroAcesso: true,
  };

  const cards = document.querySelectorAll(".marco-card");

  cards.forEach((card) => {
    const status = card.getAttribute("data-status");

    if (status === "desbloqueado") {
      card.style.borderLeft = "5px solid var(--cor-primaria)";
      card.style.opacity = "1";
    } else {
      card.style.opacity = "0.6";
      card.style.filter = "grayscale(0.8)";
    }
  });

  console.log(
    "Motor de Marcos: Aguardando novos webhooks para atualização de status.",
  );
});

document.addEventListener("DOMContentLoaded", () => {
  const btnTopo = document.getElementById("btn-voltar-topo");

  if (btnTopo) {
    // Mostra o botão quando rolar mais de 300px para baixo
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        btnTopo.classList.add("mostrar");
      } else {
        btnTopo.classList.remove("mostrar");
      }
    });

    // Volta ao topo suavemente ao clicar
    btnTopo.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("content/prices.html")
    .then((response) => response.text())
    .then((pricesData) => {
      document.getElementById("prices").innerHTML = pricesData;
    })
    .catch((error) => console.error(error));
});

function escribirTexto() {
  const textoCompleto = "135.456";
  const elementoTexto = document.getElementById("texto");
  let indice = 0;
  (function escribirCaracter() {
    if (indice < textoCompleto.length) {
      elementoTexto.innerHTML += textoCompleto.charAt(indice);
      indice++;
      setTimeout(escribirCaracter, 250);
    }
  })();
}
escribirTexto();

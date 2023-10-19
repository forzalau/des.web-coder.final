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

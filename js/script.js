/* light/dark mode */

document.addEventListener("DOMContentLoaded", function () {
  const estiloPredeterminado = document.getElementById("light");
  const estiloAlternativo = document.getElementById("dark");
  const botonCambiarEstilo = document.getElementById("mode");
  const botonCambiarEstiloMobile = document.getElementById("modeMobile");
  function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    const expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + expira + "; path=/";
  }

  function getCookie(nombre) {
    const nombreBuscado = nombre + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(nombreBuscado) === 0) {
        return cookie.substring(nombreBuscado.length, cookie.length);
      }
    }
    return "";
  }

  const estiloSeleccionado = getCookie("estilo-seleccionado");
  console.log(estiloSeleccionado);

  if (estiloSeleccionado === "dark") {
    estiloPredeterminado.disabled = true;
    estiloAlternativo.disabled = false;
  }

  botonCambiarEstilo.addEventListener("click", cambiarEstilo);
  botonCambiarEstiloMobile.addEventListener("click", cambiarEstilo);

  function cambiarEstilo() {
    if (estiloPredeterminado.disabled) {
      estiloPredeterminado.disabled = false;
      estiloAlternativo.disabled = true;
      setCookie("estilo-seleccionado", "light", 30);
    } else {
      estiloPredeterminado.disabled = true;
      estiloAlternativo.disabled = false;
      setCookie("estilo-seleccionado", "dark", 30);
    }
  }
});

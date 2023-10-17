document.addEventListener("DOMContentLoaded", function () {
  fetch("content/form.html")
    .then((response) => response.text())
    .then((formData) => {
      document.getElementById("form").innerHTML = formData;
    })
    .catch((error) => console.error(error));
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("content/freq.html")
    .then((response) => response.text())
    .then((freqData) => {
      document.getElementById("freq").innerHTML = freqData;
    })
    .catch((error) => console.error(error));
});

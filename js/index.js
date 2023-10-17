document.addEventListener("DOMContentLoaded", function () {
  fetch("pages/content/notice.html")
    .then((response) => response.text())
    .then((noticeData) => {
      document.getElementById("notice").innerHTML = noticeData;
    })
    .catch((error) => console.error(error));
});

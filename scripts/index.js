document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks! You are subscribed (this is a demo).");
    this.reset();
  });
document.getElementById("openVideo").addEventListener("click", function () {
  const modal = new bootstrap.Modal(document.getElementById("videoModal"));
  document.getElementById("videoFrame").src =
    "https://www.youtube.com/embed/eSXKzkk6ub4?si=MlUdhiv491TW0HL_";
  modal.show();
  const modalEl = document.getElementById("videoModal");
  modalEl.addEventListener(
    "hidden.bs.modal",
    function () {
      document.getElementById("videoFrame").src = "";
    },
    { once: true }
  );
});

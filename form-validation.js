const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector(".anchor").classList.remove("anchor");
  document.getElementById("password").classList.add("anchor");
});

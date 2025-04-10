const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector(".anchor").classList.remove("anchor");
  document.getElementById("password").classList.add("anchor");
});

document.querySelector("#open-form").addEventListener("click", () => {
  document.querySelector("dialog").showModal();
});

document.querySelector("#close-form").addEventListener("click", () => {
  document.querySelector("dialog").close();
});

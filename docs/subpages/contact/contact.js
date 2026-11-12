const formularz = document.getElementById("form");
const email = document.getElementById("email");
const tresc = document.getElementById("tresc");
const licznik = document.getElementById("licznik");
const komunikat = document.getElementById("status");

email.value = localStorage.getItem("email") || "";

email.addEventListener("input", function () {
  localStorage.setItem("email", email.value);
});

tresc.addEventListener("input", function () {
  licznik.textContent = "Licznik znaków: " + tresc.value.length;
});

formularz.addEventListener("submit", function (event) {
  event.preventDefault();
  komunikat.textContent = "Formularz został poprawnie uzupełniony";
  formularz.reset();

  email.value = localStorage.getItem("email") || "";
  licznik.textContent = "Liczba znaków: 0";
});

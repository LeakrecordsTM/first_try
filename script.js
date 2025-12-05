// Aktuelles Jahr im Footer setzen
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();

if (yearSpan) {
  yearSpan.textContent = currentYear;
}

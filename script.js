// Personaliza el nombre del invitado por URL
const params = new URLSearchParams(window.location.search);
const nombre = params.get("invitado");
if (nombre) {
  document.getElementById("nombre-invitado").innerText = decodeURIComponent(nombre.replace(/\+/g, " "));
}

// Cuenta regresiva
const targetDate = new Date("2025-11-16T15:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerHTML = `<h3>Faltan ${d} días, ${h}h ${m}m ${s}s</h3>`;
}, 1000);

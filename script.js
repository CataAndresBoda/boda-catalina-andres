// Nombre personalizado
const params = new URLSearchParams(window.location.search);
const name = params.get("invitado");
const fechaBoda = new Date("2025-11-16T15:00:00-05:00");
if (name) document.getElementById("guest-name").innerText = decodeURIComponent(name.replace(/\+/g, " "));

// Contador regresivo
function actualizarContador() {
    const ahora = new Date();
    const diferencia = fechaBoda - ahora;

    if (diferencia <= 0) {
        document.getElementById("countdown-section").innerHTML = "<h2 style='text-align:center;'>¡Hoy es el gran día!</h2>";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent = String(dias).padStart(2, '0');
    document.getElementById("horas").textContent = String(horas).padStart(2, '0');
    document.getElementById("minutos").textContent = String(minutos).padStart(2, '0');
    document.getElementById("segundos").textContent = String(segundos).padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);

/* Animación */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
});

document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));

/*Righ*/
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-right");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Solo se ejecuta una vez
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach((el) => observer.observe(el));
});


// Cuenta regresiva
const fechaBoda = new Date("2025-11-16T15:00:00").getTime();
const contador = document.getElementById("contador");

setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);

// Personalización por URL
const params = new URLSearchParams(window.location.search);
const invitado = params.get("invitado");
if (invitado) {
    document.getElementById("invitadoPersonalizado").textContent = `Querido(a) ${invitado}, esta invitación es para ti.`;
}


const nombre = new URLSearchParams(window.location.search).get('invitado');
if (nombre) {
  document.getElementById('nombre-invitado').innerText = decodeURIComponent(nombre.replace(/\+/g, ' '));
}

function countdown() {
  const fechaBoda = new Date('2025-11-16T15:00:00-05:00');
  const ahora = new Date();
  const tiempoRestante = fechaBoda - ahora;

  if (tiempoRestante > 0) {
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((tiempoRestante / (1000 * 60)) % 60);
    const segundos = Math.floor((tiempoRestante / 1000) % 60);
    document.getElementById('contador').innerText =
      `${dias} días, ${horas} horas, ${minutos} min, ${segundos} seg`;
  } else {
    document.getElementById('contador').innerText = '¡Es hoy!';
  }
}
setInterval(countdown, 1000);

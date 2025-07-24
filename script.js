// Nombre personalizado
const params=new URLSearchParams(window.location.search);
const name=params.get("invitado");
if(name) document.getElementById("guest-name").innerText=decodeURIComponent(name.replace(/\+/g," "));

// Contador regresivo
const target=new Date("2025-11-16T15:00:00").getTime();
function updateCountdown(){
  const now=Date.now(), diff=target-now;
  let text="¡Hoy es el gran día!";
  if(diff>0){
    const d=Math.floor(diff/864e5),
          h=Math.floor(diff%864e5/36e5),
          m=Math.floor(diff%36e5/6e4),
          s=Math.floor(diff%6e4/1e3);
    text=`Faltan ${d}d ${h}h ${m}m ${s}s`;
  }
  document.getElementById("countdown").innerText=text;
}
setInterval(updateCountdown,1000);
updateCountdown();

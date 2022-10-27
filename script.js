// querySelector me captura el primer id que tenga
const fecha = document.querySelector("#fecha");

// Creaccion de fecha actualizada 
const FECHA = new Date();

fecha.innerHTML = FECHA.toLocaleDateString('es', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
})
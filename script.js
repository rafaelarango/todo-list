// querySelector me captura el primer id que tenga
const fecha = document.querySelector("#fecha");

// Captutamos el id de las listas que vamos a crear no en html sino desde js con la funcion agrerar tarea
const listas = document.querySelector("#lista");

// Capturamos otros id que vamos a ir solicitando
const elemento = document.querySelector("#elemento");
const input = document.querySelector("#input");
const botonEnter = document.querySelector("#boton-enter");


// Creaccion de fecha actualizada 
const FECHA = new Date();

fecha.innerHTML = FECHA.toLocaleDateString('es', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
})

// Crearemos funciones para que se cree una accion al ingresar una tarea

// Funcion agregar tarea
// Le vamos a pasar 4 parametros, que son los estados de la funcion
function agregarTarea(tarea, id, realizado, eliminado) {

    // Recuerda que con `` js puede entender html
    const elemento = `
                        <li id="elemento">
                            <i class="far fa-circle co" id="0" data="realizado"></i>
                            <p class="text">lavar la Ropa</p>
                            <i class="fas fa-trash de" id="0" data="eliminado"></i>
                        </li>
    
                    `
// Vamos a insertar elementos con JS
listas.insertAdjacentElement('beforeend', elemento )
    
}



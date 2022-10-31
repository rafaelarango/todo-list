// querySelector me captura el primer id que tenga
const fecha = document.querySelector("#fecha");

// Captutamos el id de las listas que vamos a crear no en html sino desde js con la funcion agrerar tarea
const listas = document.querySelector("#listas");

// Capturamos otros id que vamos a ir solicitando
const elemento = document.querySelector("#elemento");
const input = document.querySelector("#input");
const botonEnter = document.querySelector("#boton-enter");

const check = "fa-check-circle";
const uncheck = "fa-circle";

// id para los elementos que van incrementando al agregar mas tareas
let id = 0;

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
    const REALIZADO = realizado ? check : uncheck; // si esta realizado true check, flase uncheck
    // Recuerda que con `` js puede entender html
    const elemento = `
                        <li id="elemento">
                            <i class="far ${REALIZADO} co" id="${id}" data="realizado"></i>
                            <p class="text">${tarea}</p>
                            <i class="fas fa-trash de" id="${id}" data="eliminado"></i>
                        </li>
                    `;
    // Vamos a insertar elementos con JS
    listas.insertAdjacentHTML('beforeend', elemento);

}


// Funcion Tarea realizada

function tareaRealizada(element) {
    element.classList.toggle(check);
     element.classList.toggle(uncheck);

}



// F





// Creamos 2 escuchadores de Eventos - Enter en el imput y Click en el boton 
//Click en el Boton
botonEnter.addEventListener('click', () => {
    // Capturamos el valor del imput
    const tarea = input.value;

    // Ejecutamos el evento si la tarea si existe 
    if (tarea) {
        agregarTarea(tarea, id, false, false)
    }

})

// Enter en el input
document.addEventListener('keyup', function (event) {

    if (event.key == "Enter") {
        const tarea = input.value;

        if (tarea) {
            agregarTarea(tarea, id, false, false)

            input.value = '';
            id++
        }
    }
})

// Evento para cambiar los estados de las tareas REALIZADA - ELIMINADA

listas.addEventListener('click', function () {
    const element = event.target;
    const elementData = element.attributes.data.value;
    // Prueba de que capturamos el valor de la data al darle click a los iconos 
    console.log(elementData)

    if (elementData == "realizado") {
        tareaRealizada(element);
    } else if (elementData == "eliminado") {
        // tareaEliminada(element);
        console.log("eliminado")
    }
    // console.log(element);
    // console.log(element.attributes);
    // console.log(element.attributes.data);
    // console.log(element.attributes.data.value)

})
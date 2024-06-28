import { menubuttonsClickeable } from "./components/buttons.js";
import { updateLeftTextsRocket } from "./components/textleft-rocket.js";
import { updateTitleByRocketId } from "./components/title.js";

let footerSelect = async(e, id) =>{
    e.preventDefault(); // Esto se utiliza para evitar el regarlar la pagina
    await load();
    let li = document.querySelectorAll(".footer_Space_X ul li")
    for(let val of li) {
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select')
}
// Esta función se encarga de gestionar la selección de los elementos en el footer,
// removiendo la clase 'select' de todos los elementos y añadiéndola solo al elemento seleccionado.


let capsules = document.querySelector(".buttons")
capsules.addEventListener("click", async(e) =>{
    await footerSelect(e, capsules) // Llama a la función footerSelect con el evento y el elemento
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = "" // Limpia el contenido de .buttons
    buttons.append(await menubuttonsClickeable()) // Añade el contenido generado por buttonscapsules
})

// ¿Que esperamos de esto? Pues, estamos esperando la interacción dentro de una función de botón, que como tal
// Nos va a dar un evento de click, con este click haremos que se seleccione la opción del id.

// Ejecuta un click en el elemento capsules para cargarlo por defecto
capsules.click(); // ¿Por que?... Pues debido a que es la primera pagina, por lo que lo dejaremos
// Clickeado para que asi sea lo primero que cargue.

let company = document.querySelector(".buttons")
company.addEventListener("click", async(e) =>{
    await footerSelect(e, company)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let core = document.querySelector(".buttons")
core.addEventListener("click", async(e) =>{
    await footerSelect(e, core)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let crew = document.querySelector(".buttons")
crew.addEventListener("click", async(e) =>{
    await footerSelect(e, crew)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let dragons = document.querySelector(".buttons")
dragons.addEventListener("click", async(e) =>{
    await footerSelect(e, dragons)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let history = document.querySelector(".buttons")
history.addEventListener("click", async(e) =>{
    await footerSelect(e, history)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let landspads = document.querySelector(".buttons")
landspads.addEventListener("click", async(e) =>{
    await footerSelect(e, landspads)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let launches = document.querySelector(".buttons")
launches.addEventListener("click", async(e) =>{
    await footerSelect(e, launches)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let launchpads = document.querySelector(".buttons")
launchpads.addEventListener("click", async(e) =>{
    await footerSelect(e, launchpads)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let payloads = document.querySelector(".buttons")
payloads.addEventListener("click", async(e) =>{
    await footerSelect(e, payloads)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let roadster = document.querySelector(".buttons")
roadster.addEventListener("click", async(e) =>{
    await footerSelect(e, roadster)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let rockets = document.querySelector(".buttons")
rockets.addEventListener("click", async(e) =>{
    await footerSelect(e, rockets)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let ships = document.querySelector(".buttons")
ships.addEventListener("click", async(e) =>{
    await footerSelect(e, ships)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})

let starlink = document.querySelector(".buttons")
starlink.addEventListener("click", async(e) =>{
    await footerSelect(e, starlink)
    let buttons = document.querySelector(".buttons");
    buttons.innerHTML = ""
    buttons.append(await menubuttonsClickeable())
})


// ejemplo de uso
document.addEventListener('DOMContentLoaded', () => {
    updateTitleByRocketId('5e9d0d95eda69955f709d1eb'); // ID de ejemplo
    updateLeftTextsRocket('5e9d0d95eda69955f709d1eb');
});


document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de paginación
    const buttons = document.querySelectorAll('.button_main_page');

    // Agregar un evento de clic a cada botón
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            
            // Lógica para cambiar la página o realizar alguna acción basada en el botón clickeado
            // Puedes añadir lógica adicional aquí para manejar los cambios de página
            
            // Ejemplo de acción: mostrar el número del botón clickeado en la consola
            console.log('Botón clickeado:', button.textContent.trim());
        });
    });
});
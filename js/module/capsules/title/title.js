import { getAllcapsules, getcapsulesById } from "../../../components/capsules.js";
import { idsbuttonscapsules } from "../buttons/idsbuttons.js";

// Función para cambiar el titulo
export const menutitleChangercapsules = async (capsulesData) => {
    let { serial } = capsulesData; // Accedemos directamente al nombre del cohete desde el objeto capsulesData
    let plantilla = `<h1>${serial}</h1>`; // Generamos el título usando el nombre del cohete
    return plantilla; // Retornamos la plantilla con el título
}

// Función para obtener los titulos de los cohetes e irlos cambiando dependiendo en el ID presentado
export const updateTitleBycapsulesId = async (id) => { 
    try { // Prevenimos errores a la hora de cambiar el titulo
        const capsulesData = await getAllcapsules(); // Obtiene todos los cohetes
        const selectedcapsules = getcapsulesById(capsulesData, id); // Seleccionamos el cohete por el ID
        if (selectedcapsules) {
            const titleTemplate = await menutitleChangercapsules(selectedcapsules); // Generamos el titulo
            document.getElementById("title").innerHTML = titleTemplate;
        } else {
            console.error(`No se encontró el cohete con ID: ${id}`); // Si no se encuentra el cohete deseado con el id (x), entonces lanzara este error.
        }
    } catch (error) {
        console.error('Error al actualizar el título... ', error); // Evitamos los errores, por lo que usamos un catch para atrapar posible error.
        // En cuyo caso no deje actualizar el titulo por x o y razón, o hubo un error al pedir la petición al servidor, entonces mostrara el mensaje precargado para este error.
    }
}


// Función para generar los botones dinámicamente
export function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Limpiar el contenedor de botones

    idsbuttonscapsules.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Mostrar el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            await updateTitleBycapsulesId(id);
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}
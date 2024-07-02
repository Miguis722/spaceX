import { getAllHistory, getHistoryById } from "../../../components/history.js";
import { idsbuttonsHistory } from "../buttons/idsbuttons.js";

// Función para cambiar el titulo
export const menutitleChangerHistory = async (historyData) => {
    let { title } = historyData; // Accedemos directamente al nombre del cohete desde el objeto historyData
    let plantilla = `<h1>${title}</h1>`; // Generamos el título usando el nombre del cohete
    return plantilla; // Retornamos la plantilla con el título
}


// Función para obtener los titulos de los cohetes e irlos cambiando dependiendo en el ID presentado
export const updateTitleByHistoryId = async (id) => { 
    try { // Prevenimos errores a la hora de cambiar el titulo
        const historyData = await getAllHistory(); // Obtiene todos los cohetes
        const selectedHistory = getHistoryById(historyData, id); // Seleccionamos el cohete por el ID
        if (selectedHistory) {
            const titleTemplate = await menutitleChangerHistory(selectedHistory); // Generamos el titulo
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

    idsbuttonsHistory.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Mostrar el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            await updateTitleByHistoryId(id);
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}




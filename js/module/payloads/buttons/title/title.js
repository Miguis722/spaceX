import { getAllpayloads, getpayloadsById } from '../../../../components/payloads.js';
import { idsbuttonsPayloads } from '../idsbuttons.js';

// Función para cambiar el titulo
export const titleChangerpayloads = async (payloadsData) => {
    let { name } = payloadsData;
    let plantilla = `<h1>${name}</h1>`; // Generamos el título usando el nombre del cohete
    return plantilla; // Retornamos la plantilla con el título
}


// Función para obtener los titulos de los cohetes e irlos cambiando dependiendo en el ID presentado
export const updateTitleBypayloadsId = async (id) => { 
    try { // Prevenimos errores a la hora de cambiar el titulo
        const payloadsData = await getAllpayloads(); // Obtiene todos las payloads
        const selectedpayloads = getpayloadsById(payloadsData, id); // Seleccionamos el cohete por el ID
        if (selectedpayloads) {
            const titleTemplate = await titleChangerpayloads(selectedpayloads); // Generamos el titulo
            document.getElementById("title").innerHTML = titleTemplate;
        } else {
            console.error(`No se encontró la payloads con ID: ${id}`); // Si no se encuentra el cohete deseado con el id (x), entonces lanzara este error.
        }
    } catch (error) {
        console.error('Error al actualizar el título... ', error); // Evitamos los errores, por lo que usamos un catch para atrapar posible error.
        // En cuyo caso no deje actualizar el titulo por x o y razón, o hubo un error al pedir la petición al servidor, entonces mostrara el mensaje precargado para este error.
    }
}

export function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Limpiar el contenedor de botones

    idsbuttonsPayloads.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Mostrar el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            await updateTitleBypayloadsId(id); // Llama a la función para actualizar el título con el ID correspondiente
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}
import { getAllLaunchpads, getLaunchpadsById } from '../../../components/launchpads.js';
import { idsbuttonsLaunchpads } from '../buttons/idsbuttons.js'

// Función para cambiar el titulo
export const titleChangerLaunchpads = async (LaunchpadsData) => {
    let { name } = LaunchpadsData;
    let plantilla = `<h1>${name}</h1>`; // Generamos el título usando el nombre del cohete
    return plantilla; // Retornamos la plantilla con el título
}


// Función para obtener los titulos de los cohetes e irlos cambiando dependiendo en el ID presentado
export const updateTitleByLaunchpadsId = async (id) => { 
    try { // Prevenimos errores a la hora de cambiar el titulo
        const LaunchpadsData = await getAllLaunchpads(); // Obtiene todos las Launchpads
        const selectedLaunchpads = getLaunchpadsById(LaunchpadsData, id); // Seleccionamos el cohete por el ID
        if (selectedLaunchpads) {
            const titleTemplate = await titleChangerLaunchpads(selectedLaunchpads); // Generamos el titulo
            document.getElementById("title").innerHTML = titleTemplate;
        } else {
            console.error(`No se encontró la Launchpads con ID: ${id}`); // Si no se encuentra el cohete deseado con el id (x), entonces lanzara este error.
        }
    } catch (error) {
        console.error('Error al actualizar el título... ', error); // Evitamos los errores, por lo que usamos un catch para atrapar posible error.
        // En cuyo caso no deje actualizar el titulo por x o y razón, o hubo un error al pedir la petición al servidor, entonces mostrara el mensaje precargado para este error.
    }
}

export function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Limpiar el contenedor de botones

    idsbuttonsLaunchpads.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Mostrar el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            await updateTitleByLaunchpadsId(id); // Llama a la función para actualizar el título con el ID correspondiente
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}
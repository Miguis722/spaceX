import { getAlllaunches, getLaunchById } from "../../../components/launches.js";
import { idsbuttonslaunches } from "../buttons/idsbuttons.js";

// Función para cambiar el titulo
export const menutitleChangerlaunches = async (launchesData) => {
    let { name } = launchesData; // Accedemos directamente al nombre del cohete desde el objeto launchesData
    let plantilla = `<h1>${name}</h1>`; // Generamos el título usando el nombre del cohete
    return plantilla; // Retornamos la plantilla con el título
}

// Función para obtener los titulos de los cohetes e irlos cambiando dependiendo en el ID presentado
export const updateTitleBylaunchesId = async (id) => {
    try {
        const launchesData = await getAlllaunches();
        const selectedlaunches = getLaunchById(launchesData, id);
        console.log('Lanzamiento seleccionado:', selectedlaunches); // Verificar en la consola

        if (selectedlaunches) {
            const titleTemplate = await menutitleChangerlaunches(selectedlaunches);
            document.getElementById("title").innerHTML = titleTemplate;
        } else {
            console.error(`No se encontró el cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar el título:', error);
    }
}


// Función para generar los botones dinámicamente
export function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Limpiar el contenedor de botones

    idsbuttonslaunches.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Mostrar el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            await updateTitleBylaunchesId(id);
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}
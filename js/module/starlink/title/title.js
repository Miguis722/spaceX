import { getAllstarlink, getstarlinkById } from "../../../components/starlink.js";
import { idsbuttonsstarlink } from "../idsbuttons/idsbuttons.js";

// Función para cambiar el título
export const titleChangerstarlink = async (starlinkData) => {
    const { spaceTrack } = starlinkData;
    const { OBJECT_NAME } = spaceTrack;
    
    let plantilla = `<h1>${OBJECT_NAME}</h1>`; // Generamos el título usando el nombre del objeto STARLINK
    return plantilla; // Retornamos la plantilla con el título
}

// Función para obtener los títulos de los cohetes e irlos cambiando dependiendo en el ID presentado
export const updateTitleBystarlinkId = async (id) => {
    try {
        const starlinkData = await getAllstarlink(); // Obtiene todos los datos de STARLINK
        const selectedstarlink = getstarlinkById(starlinkData, id); // Selecciona el STARLINK por su ID
        if (selectedstarlink) {
            const titleTemplate = await titleChangerstarlink(selectedstarlink); // Genera el título
            document.getElementById("title").innerHTML = titleTemplate; // Actualiza el elemento HTML con el título generado
        } else {
            console.error(`No se encontró el STARLINK con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar el título... ', error);
    }
}

export function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Limpia el contenedor de botones

    idsbuttonsstarlink.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Muestra el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            await updateTitleBystarlinkId(id); // Llama a la función para actualizar el título con el ID correspondiente
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}

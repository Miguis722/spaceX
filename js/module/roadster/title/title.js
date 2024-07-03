import { getAllroadster, getroadsterById } from "../../../components/roadster.js";
import { idsbuttonsRoadster } from "../buttons/idsbuttons.js";

// Función para generar los botones dinámicamente
export function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Limpiar el contenedor de botones

    idsbuttonsRoadster.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Mostrar el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            console.log('ID del botón clickeado:', id); // Verificar el ID del botón clickeado
            try {
                await updateTitleByroadsterId(id); // Pasar el ID correcto aquí
            } catch (error) {
                console.error('Error al actualizar el título:', error);
            }
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}

// Función para cambiar el titulo
export const menutitleChangerroadster = async (roadsterData) => {
    let { name } = roadsterData;
    let plantilla = `<h1>${name}</h1>`;
    return plantilla;
}

// Función para obtener los titulos de los cohetes e irlos cambiando dependiendo en el ID presentado
export const updateTitleByroadsterId = async (id) => {
    try {
        console.log('Actualizando título con ID:', id); // Verificar el ID que se está usando
        const roadsterData = await getAllroadster();
        const selectedroadster = getroadsterById(roadsterData, id);
        if (selectedroadster) {
            const titleTemplate = await menutitleChangerroadster(selectedroadster);
            document.getElementById("title").innerHTML = titleTemplate;
        } else {
            console.error(`No se encontró el cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar el título:', error);
    }
}

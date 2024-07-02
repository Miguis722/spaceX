import { getAllCrew, getCrewById } from "../../../components/crew.js";
import { idsbuttonsCrew } from "../buttons/idsbutton.js";

// Función para cambiar el título
export const titleChangerCrew = async (crewData) => {
    let { name } = crewData;
    let plantilla = `<h1>${name}</h1>`; // Generamos el título usando el nombre del tripulante
    return plantilla; // Retornamos la plantilla con el título
};

// Función para obtener los títulos de los tripulantes e irlos cambiando dependiendo del ID presentado
export const updateTitleByCrewId = async (id) => { 
    try { // Prevenimos errores a la hora de cambiar el título
        const crewData = await getAllCrew(); // Obtiene todos los tripulantes
        const selectedCrew = getCrewById(crewData, id); // Seleccionamos el tripulante por el ID
        if (selectedCrew) {
            const titleTemplate = await titleChangerCrew(selectedCrew); // Generamos el título
            document.getElementById("title").innerHTML = titleTemplate;
        } else {
            console.error(`No se encontró al tripulante con ID: ${id}`); // Si no se encuentra el tripulante deseado con el id (x), entonces lanzará este error.
        }
    } catch (error) {
        console.error('Error al actualizar el título... ', error); // Evitamos los errores, por lo que usamos un catch para atrapar posibles errores.
        // En cuyo caso no deje actualizar el título por x o y razón, o hubo un error al pedir la petición al servidor, entonces mostrará el mensaje precargado para este error.
    }
}

export function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Limpiar el contenedor de botones

    idsbuttonsCrew.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Mostrar el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            await updateTitleByCrewId(id); // Llama a la función para actualizar el título con el ID correspondiente
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}

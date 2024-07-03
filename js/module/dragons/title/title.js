import { getAllDragons, getDragonsById } from "../../../components/dragons.js";
import { idsbuttonsDragons } from "../buttons/idsbuttons.js";

// Función para cambiar el titulo
export const menutitleChangerDragons = async (DragonsData) => {
    let { name } = DragonsData; // Accedemos directamente al nombre del cohete desde el objeto DragonsData
    let plantilla = `<h1>${name}</h1>`; // Generamos el título usando el nombre del cohete
    return plantilla; // Retornamos la plantilla con el título
}


// Función para obtener los titulos de los cohetes e irlos cambiando dependiendo en el ID presentado
export const updateTitleByDragonsId = async (id) => { 
    try { // Prevenimos errores a la hora de cambiar el titulo
        const DragonsData = await getAllDragons(); // Obtiene todos los cohetes
        const selectedDragons = getDragonsById(DragonsData, id); // Seleccionamos el cohete por el ID
        if (selectedDragons) {
            const titleTemplate = await menutitleChangerDragons(selectedDragons); // Generamos el titulo
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

    idsbuttonsDragons.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Mostrar el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            await updateTitleByDragonsId(id);
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}




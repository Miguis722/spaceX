import { getAllRockets, getRocketById } from "./rocket.js";
// Importamos las funciones de js/components/rocket.js... Para obtener todos los
// Cohetes y la función para obtener uno en especifico...

// Función para cambiar el titulo
export const menutitleChangerRockets = async (rocketData) => {
    let { name } = rocketData; // Accedemos directamente al nombre del cohete desde el objeto rocketData
    let plantilla = `<h1>${name}</h1>`; // Generamos el título usando el nombre del cohete
    return plantilla; // Retornamos la plantilla con el título
}


// Función para obtener los titulos de los cohetes e irlos cambiando dependiendo en el ID presentado
export const updateTitleByRocketId = async (id) => { 
    try { // Prevenimos errores a la hora de cambiar el titulo
        const rocketsData = await getAllRockets(); // Obtiene todos los cohetes
        const selectedRocket = getRocketById(rocketsData, id); // Seleccionamos el cohete por el ID
        if (selectedRocket) {
            const titleTemplate = await menutitleChangerRockets(selectedRocket); // Generamos el titulo
            document.getElementById("title").innerHTML = titleTemplate;
        } else {
            console.error(`No se encontró el cohete con ID: ${id}`); // Si no se encuentra el cohete deseado con el id (x), entonces lanzara este error.
        }
    } catch (error) {
        console.error('Error al actualizar el título... ', error); // Evitamos los errores, por lo que usamos un catch para atrapar posible error.
        // En cuyo caso no deje actualizar el titulo por x o y razón, o hubo un error al pedir la petición al servidor, entonces mostrara el mensaje precargado para este error.
    }
}

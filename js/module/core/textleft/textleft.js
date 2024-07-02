import { getAllCore, getCoreById } from "../../../components/core.js";

const tableleftCore = async (coreData) => {
    let { launches } = coreData; // Obtienes la lista de lanzamientos
    let launchesList = ''; // Variable para almacenar la lista de lanzamientos en HTML
    
    // Verifica si launches es un array y si tiene elementos
    if (Array.isArray(launches) && launches.length > 0) {
        // Itera sobre cada lanzamiento y genera un elemento de lista
        launchesList = launches.map((launch, index) => {
            return `<li key="${index}">${launch}</li>`;
        }).join(''); // Une todos los elementos en un string
    } else {
        launchesList = '<li>No se encontraron lanzamientos.</li>';
    }
    
    let plantilla = ''; // Plantilla inicial vacía
    plantilla = /*html*/`
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="../storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>LAUNCHES</h3>
                <ul>${launchesList}</ul> <!-- Lista de lanzamientos -->
            </div>
        </div>
    </nav>
    `;
    return plantilla; // Retorna la plantilla con la lista de lanzamientos
};


// Función para seleccionar la parte de la izquierda y hacerlo funcional
export const updateLeftTextsCore = async (id) => {
    try {
        const coreData = await getAllCore(); // Obtener todos los cohetes
        const selectedCore = getCoreById(coreData, id); // Obtener cohete por ID
        if (selectedCore) {
            const textleftTemplate = await tableleftCore(selectedCore); // Generar plantilla HTML
            document.getElementById("container_main_nav_description").innerHTML = textleftTemplate; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del crew con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};


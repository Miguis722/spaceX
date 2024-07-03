import { getAllroadster, getroadsterById } from "../../../components/roadster.js";

// Función para hacer la plantilla de cómo deberá aparecer el contenido de la parte izquierda.
const tableleftroadster = async (roadsterData) => {
    // Desestructuración de los datos necesarios
    const { details, wikipedia, video } = roadsterData;

    // Generación de la plantilla HTML
    let plantilla = /*html*/`
        <nav class="main_nav_description" id="nav_main">
            <div class="description_item" id="description_item">
                <div class="images_nav_left_div" id="div_images_left">
                    <img src="../storage/images/icons/mech.svg">
                </div>
                <div class="information_about_left" id="nav_left_div">
                    <h3>Description</h3>
                    <small>${details}</small>
                </div>
            </div>
        </nav>
        <nav class="main_nav_description" id="nav_main">
            <div class="description_item" id="description_item">
                <div class="images_nav_left_div" id="div_images_left">
                    <img src="../storage/images/icons/mech.svg">
                </div>
                <div class="information_about_left" id="nav_left_div">
                    <h3>More about - Read</h3>
                    <small><a href="${wikipedia}" target="_blank">Wikipedia</a></small>
                </div>
            </div>
        </nav>
        <nav class="main_nav_description" id="nav_main">
            <div class="description_item" id="description_item">
                <div class="images_nav_left_div" id="div_images_left">
                    <img src="../storage/images/icons/mech.svg">
                </div>
                <div class="information_about_left" id="nav_left_div">
                    <h3>More about - Video</h3>
                    <small><a href="${video}" target="_blank">Youtube</a></small>
                </div>
            </div>
        </nav>
    `;

    return plantilla; // Retornamos la plantilla con la información
};
// success_rate_pct

// Función para seleccionar la parte de la izquierda y hacerlo funcional
export const updateLeftTextsroadster = async (id) => {
    try {
        const roadsterData = await getAllroadster(); // Obtener todos los cohetes
        const selectedroadster = getroadsterById(roadsterData, id); // Obtener cohete por ID
        if (selectedroadster) {
            const textleftTemplate = await tableleftroadster(selectedroadster); // Generar plantilla HTML
            document.getElementById("container_main_nav_description").innerHTML = textleftTemplate; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};
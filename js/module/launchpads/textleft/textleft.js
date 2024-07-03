import { getAllLaunchpads, getLaunchpadsById } from "../../../components/launchpads.js";

// Función para hacer la plantilla de cómo deberá aparecer el contenido de la parte izquierda.
const tableleftLaunchpads = async (LaunchpadsData) => {
    // Desestructuración de los datos necesarios
    const { full_name, region, locality, details } = LaunchpadsData;

    // Generación de la plantilla HTML
    let plantilla = /*html*/`
        <nav class="main_nav_description" id="nav_main">
            <div class="description_item" id="description_item">
                <div class="images_nav_left_div" id="div_images_left">
                    <img src="../storage/images/icons/mech.svg">
                </div>
                <div class="information_about_left" id="nav_left_div">
                    <h3>Full name</h3>
                    <small>${full_name}</small>
                </div>
            </div>
        </nav>
        <nav class="main_nav_description" id="nav_main">
            <div class="description_item" id="description_item">
                <div class="images_nav_left_div" id="div_images_left">
                    <img src="../storage/images/icons/mech.svg">
                </div>
                <div class="information_about_left" id="nav_left_div">
                    <h3>Location: ${region}</h3>
                    <small>${locality}</small>
                </div>
            </div>
        </nav>
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
    `;

    return plantilla; // Retornamos la plantilla con la información
};
// success_rate_pct

// Función para seleccionar la parte de la izquierda y hacerlo funcional
export const updateLeftTextsLaunchpads = async (id) => {
    try {
        const LaunchpadsData = await getAllLaunchpads(); // Obtener todos los cohetes
        const selectedLaunchpads = getLaunchpadsById(LaunchpadsData, id); // Obtener cohete por ID
        if (selectedLaunchpads) {
            const textleftTemplate = await tableleftLaunchpads(selectedLaunchpads); // Generar plantilla HTML
            document.getElementById("container_main_nav_description").innerHTML = textleftTemplate; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};
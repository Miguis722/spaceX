import { getAllLandspads, getLandspadsById } from "../../../components/landspads.js";

// Función para hacer la plantilla de cómo deberá aparecer el contenido de la parte izquierda.
const tableleftLandspads = async (LandspadsData) => {
    // Desestructuración de los datos necesarios
    const { region, locality, details, wikipedia } = LandspadsData;

    // Generación de la plantilla HTML
    let plantilla = /*html*/`
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
        <nav class="main_nav_description" id="nav_main">
            <div class="description_item" id="description_item">
                <div class="images_nav_left_div" id="div_images_left">
                    <img src="../storage/images/icons/mech.svg">
                </div>
                <div class="information_about_left" id="nav_left_div">
                    <h3>More about</h3>
                    <small><a href="${wikipedia}" target="_blank">Wikipedia</a></small>
                </div>
            </div>
        </nav>
    `;

    return plantilla; // Retornamos la plantilla con la información
};
// success_rate_pct

// Función para seleccionar la parte de la izquierda y hacerlo funcional
export const updateLeftTextsLandspads = async (id) => {
    try {
        const LandspadsData = await getAllLandspads(); // Obtener todos los cohetes
        const selectedLandspads = getLandspadsById(LandspadsData, id); // Obtener cohete por ID
        if (selectedLandspads) {
            const textleftTemplate = await tableleftLandspads(selectedLandspads); // Generar plantilla HTML
            document.getElementById("container_main_nav_description").innerHTML = textleftTemplate; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};
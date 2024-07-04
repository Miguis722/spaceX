import { getAlllaunches, getLaunchById } from "../../../components/launches.js";

// Función para hacer la plantilla de cómo deberá aparecer el contenido de la parte izquierda.
const tableleftlaunches = async (launchesData) => {
    let plantilla = '';

    const { links } = launchesData;

    // Construir la plantilla HTML
    plantilla += /*html*/`
        <nav class="main_nav_description">
            <div class="description_item">
                <div class="images_nav_left_div">
                    <img src="../storage/images/icons/mech.svg">
                </div>
                <div class="information_about_left">
                    <h3>Watch the Webcast</h3>
                    <small><a href="${links.webcast}" target="_blank">See webcast</a></small>
                </div>
            </div>
        </nav>
        <nav class="main_nav_description">
            <div class="description_item">
                <div class="images_nav_left_div">
                    <img src="../storage/images/icons/mech.svg">
                </div>
                <div class="information_about_left">
                    <h3>Article</h3>
                    <small><a href="${links.article}" target="_blank">Article</a></small>
                </div>
            </div>
        </nav>
        <nav class="main_nav_description">
            <div class="description_item">
                <div class="images_nav_left_div">
                    <img src="../storage/images/icons/mech.svg">
                </div>
                <div class="information_about_left">
                    <h3>More about</h3>
                    <small><a href="${links.wikipedia}" target="_blank">Wikipedia</a></small>
                </div>
            </div>
        </nav>
    `;

    return plantilla; // Retornar la plantilla construida
};

// Función para seleccionar la parte de la izquierda y hacerlo funcional
export const updateLeftTextslaunches = async (id) => {
    try {
        const launchesData = await getAlllaunches(); // Obtener todos los lanzamientos
        const selectedlaunches = getLaunchById(launchesData, id); // Obtener lanzamiento por ID
        if (selectedlaunches) {
            const textleftTemplate = await tableleftlaunches(selectedlaunches); // Generar plantilla HTML
            document.getElementById("container_main_nav_description").innerHTML = textleftTemplate; // Actualizar contenido HTML en el contenedor específico
        } else {
            console.error(`No se encontró la data del lanzamiento con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};

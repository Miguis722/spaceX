import { getAlllaunches, getLaunchById } from "../../../components/launches.js";


// Función para generar el carrusel de imágenes basado en los datos de lanzamiento
const generateImages = (launchData) => {
    const { links } = launchData;
    const { patch } = links;
    const { large } = patch;

    if (!large) {
        return '<p>No images available</p>';
    }

    // Generar plantilla HTML con las imágenes
    const plantilla = /*html*/`
        <div class="images_carrusel">
            <img src="${large}" class="LAimage" referrerpolicy="no-referrer" alt="Launch Image">
        </div>
    `;
    return plantilla;
}

// Función para actualizar las imágenes del lanzamiento por ID
export const updateImagesLaunches = async (id) => {
    try {
        const launchesData = await getAlllaunches(); // Obtener todos los lanzamientos
        const selectedLaunch = getLaunchById(launchesData, id); // Obtener lanzamiento por ID

        if (selectedLaunch) {
            const imagesHTML = generateImages(selectedLaunch); // Generar plantilla HTML de imágenes
            document.querySelector(".Main_center_information_carrusel").innerHTML = imagesHTML; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró el lanzamiento con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar las imágenes del lanzamiento: ', error);
    }
};
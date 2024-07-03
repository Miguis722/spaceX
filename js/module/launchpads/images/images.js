import { getAllLaunchpads, getLaunchpadsById } from '../../../components/launchpads.js';

// Función para generar el carrusel de imágenes
const generateImages = (LaunchpadsData) => {
    const { images } = LaunchpadsData;
    const { large } = images;

    if (!large || large.length === 0) {
        return '<p>No images available</p>';
    }

    // Generar plantilla HTML con las imágenes
    const plantilla = /*html*/`
        <div class="images_carrusel">
            ${large.map(image => `<img src="${image}" class="LAimage" referrerpolicy="no-referrer" alt="Landspad Image">`).join('')}
        </div>
    `;
    return plantilla;
}

// Función para seleccionar la parte de las imágenes y hacerlo funcional
export const updateImagesLaunchpads = async (id) => {
    try {
        const LaunchpadsData = await getAllLaunchpads(); // Obtener todos los Launchpads
        const selectedLaunchpads = getLaunchpadsById(LaunchpadsData, id); // Obtener landspad por ID
        
        if (selectedLaunchpads) {
            const imagesHTML = generateImages(selectedLaunchpads); // Generar plantilla HTML
            document.querySelector(".Main_center_information_carrusel").innerHTML = imagesHTML; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del landspad con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar las imágenes: ', error);
    }
};

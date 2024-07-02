import { getAllLandspads, getLandspadsById } from '../../../components/landspads.js';

// Función para generar el carrusel de imágenes
const generateImages = (LandspadsData) => {
    const { images } = LandspadsData;
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
export const updateImagesLandspads = async (id) => {
    try {
        const LandspadsData = await getAllLandspads(); // Obtener todos los landspads
        const selectedLandspads = getLandspadsById(LandspadsData, id); // Obtener landspad por ID
        
        if (selectedLandspads) {
            const imagesHTML = generateImages(selectedLandspads); // Generar plantilla HTML
            document.querySelector(".Main_center_information_carrusel").innerHTML = imagesHTML; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del landspad con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar las imágenes: ', error);
    }
};

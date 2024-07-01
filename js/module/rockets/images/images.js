import { getAllRockets, getRocketById } from '../../../components/rocket.js';

// Main_center_information_carrusel
const generateImages = async (rocketData) => {
    const { flickr_images } = rocketData;
    let plantilla = '';
    // Mapeamos las imágenes de flickr_images para crear elementos img
    plantilla = /*html*/ `
        <div class="images_carrusel">
            ${flickr_images.map(image => `<img src="${image}" class="LAimage">`).join('')}
        </div>
    `;
    return plantilla; // Retornamos la plantilla con la info.
}

// Función para seleccionar la parte de las imágenes y hacerlo funcional
export const updateImagesRockets = async (id) => {
    try {
        const rocketsData = await getAllRockets(); // Obtener todos los cohetes
        const selectedRocket = getRocketById(rocketsData, id); // Obtener cohete por ID
        if (selectedRocket) {
            const imagesHTML = await generateImages(selectedRocket); // Generar plantilla HTML
            document.querySelector(".Main_center_information_carrusel").innerHTML = imagesHTML; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar las imágenes... ', error);
    }
};

import { getAllDragons, getDragonsById } from '../../../components/dragons.js';

// Main_center_information_carrusel
const generateImages = async (DragonsData) => {
    const { flickr_images } = DragonsData;
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
export const updateImagesDragons = async (id) => {
    try {
        const DragonsData = await getAllDragons(); // Obtener todos los cohetes
        const selectedDragons = getDragonsById(DragonsData, id); // Obtener cohete por ID
        if (selectedDragons) {
            const imagesHTML = await generateImages(selectedDragons); // Generar plantilla HTML
            document.querySelector(".Main_center_information_carrusel").innerHTML = imagesHTML; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar las imágenes... ', error);
    }
};

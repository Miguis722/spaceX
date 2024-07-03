import { getAllroadster, getroadsterById } from '../../../components/roadster.js';

// Función para generar el carrusel de imágenes
const generateImages = (roadsterData) => {
    const { flickr_images } = roadsterData;

    if (!flickr_images || flickr_images.length === 0) {
        return '<p>No images available</p>';
    }

    // Generar plantilla HTML con las imágenes
    const plantilla = /*html*/`
        <div class="images_carrusel">
            ${flickr_images.map(image => `<img src="${image}" class="LAimage" referrerpolicy="no-referrer" style="margin-left: 150px"alt="Roadster Image">`).join('')}
        </div>
    `;
    return plantilla;
}

// Función para actualizar las imágenes del roadster por ID
export const updateImagesroadster = async (id) => {
    try {
        const roadsterData = await getAllroadster(); // Obtener todos los roadsters
        const selectedroadster = getroadsterById(roadsterData, id); // Obtener roadster por ID
        
        if (selectedroadster) {
            const imagesHTML = generateImages(selectedroadster); // Generar plantilla HTML
            document.querySelector(".Main_center_information_carrusel").innerHTML = imagesHTML; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró el roadster con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar las imágenes:', error);
    }
};
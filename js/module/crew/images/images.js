import { getAllCrew, getCrewById } from '../../../components/crew.js';

// Función para generar la plantilla de imágenes
const generateImages = async (crewData) => {
    const { image } = crewData;
    let plantilla = '';
    // Crear elemento img para la imagen del crew
    plantilla = /*html*/ `
        <div class="images_carrusel">
            <img src="${image}" class="LAimage" referrerpolicy="no-referrer">
        </div>
    `;
    return plantilla; // Retornamos la plantilla con la info.
}

// Función para seleccionar la parte de las imágenes y hacerlo funcional
export const updateImagesCrew = async (id) => {
    try {
        const crewData = await getAllCrew(); // Obtener todos los tripulantes
        const selectedCrew = getCrewById(crewData, id); // Obtener tripulante por ID
        if (selectedCrew) {
            const imagesHTML = await generateImages(selectedCrew); // Generar plantilla HTML
            document.querySelector(".Main_center_information_carrusel").innerHTML = imagesHTML; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del crew con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar las imágenes... ', error);
    }
};

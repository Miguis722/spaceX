import { getAllShips, getShipById } from "../../../components/ships.js";

// Función para generar las imágenes en HTML
const generateImages = (shipData) => {
    const { image } = shipData; // Extraer la URL de la imagen
    const imageHTML = /*html*/ `
        <div class="images_carrusel">
            <img src="${image}" class="LAimage" referrerpolicy="no-referrer">
        </div>
    `;
    return imageHTML;
};

// Función para actualizar las imágenes de los ships por ID
export const updateImagesShips = async (id) => {
    try {
        const shipsData = await getAllShips(); // Obtener todos los ships
        const selectedShip = getShipById(shipsData, id); // Obtener ship por ID

        if (selectedShip) {
            const imagesHTML = generateImages(selectedShip); // Generar plantilla HTML
            document.querySelector(".Main_center_information_carrusel").innerHTML = imagesHTML; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró el ship con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar las imágenes... ', error);
    }
};
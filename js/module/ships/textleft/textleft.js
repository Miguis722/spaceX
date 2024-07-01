import { getAllShips, getShipById } from "../../../components/ships.js";

const tableleftShips = async (shipsData) => {
    let { home_port, link } = shipsData; // Necesitamos saber de donde traer la data, entonces la importamos de title debido a que alli está todo. Tambien debemos tener en cuenta que está funcion está desestructurando el JSON, para traer
    // El pais, la descripción, el costo por lanzamiento, la fecha del primer vuelo, y el link del wikipedia para conocer más.
    let plantilla = ''; // Dejamos la plantilla vacia o en blanco.
    plantilla = /*html*/`
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="../storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>Port of the Ship</h3>
                <small>${home_port}</small>
            </div>
        </div>
    </nav>
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="../storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>READ MORE ABOUT IT</h3>
                <small><a href="${link}">About...</a></small>
            </div>
        </div>
    </nav>
    `;
    return plantilla; // Retornamos la plantilla con la info.
};

// Función para seleccionar la parte de la izquierda y hacerlo funcional
export const updateLeftTextsShip = async (id) => {
    try {
        const shipsData = await getAllShips(); // Obtener todos los cohetes
        const selectedShip = getShipById(shipsData, id); // Obtener cohete por ID
        if (selectedShip) {
            const textleftTemplate = await tableleftShips(selectedShip); // Generar plantilla HTML
            document.getElementById("container_main_nav_description").innerHTML = textleftTemplate; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del ship con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};


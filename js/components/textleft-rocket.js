import { getAllRockets, getRocketById } from "./rocket.js";

// Función para hacer la plantilla de como debera de aparecer el contenido de la parte de la izquierda.
const tableleftRockets = async (rocketData) => {
    let { country, description, company, cost_per_launch, first_flight, success_rate_pct, wikipedia } = rocketData; // Necesitamos saber de donde traer la data, entonces la importamos de title debido a que alli está todo. Tambien debemos tener en cuenta que está funcion está desestructurando el JSON, para traer
    // El pais, la descripción, el costo por lanzamiento, la fecha del primer vuelo, y el link del wikipedia para conocer más.
    let plantilla = ''; // Dejamos la plantilla vacia o en blanco.
    plantilla = /*html*/`
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>${country}</h3>
                <small>${description}</small>
            </div>
        </div>
    </nav>
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>Responsible Company</h3>
                <small>${company}</small>
            </div>
        </div>
    </nav>
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>The estimated cost per rocket launch</h3>
                <small>$${cost_per_launch}</small>
            </div>
        </div>
    </nav>
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>The date of the first flight of the rocket</h3>
                <small>${first_flight}</small>
            </div>
        </div>
    </nav>
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>Tase of success in porcent</h3>
                <small>${success_rate_pct}%</small>
            </div>
        </div>
    </nav>
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>READ MORE ABOUT IT</h3>
                <small><a href="${wikipedia}">Wikipedia</a></small>
            </div>
        </div>
    </nav>
    `;
    return plantilla; // Retornamos la plantilla con la info.
};
// success_rate_pct

// Función para seleccionar la parte de la izquierda y hacerlo funcional
export const updateLeftTextsRocket = async (id) => {
    try {
        const rocketsData = await getAllRockets(); // Obtener todos los cohetes
        const selectedRocket = getRocketById(rocketsData, id); // Obtener cohete por ID
        if (selectedRocket) {
            const textleftTemplate = await tableleftRockets(selectedRocket); // Generar plantilla HTML
            document.getElementById("container_main_nav_description").innerHTML = textleftTemplate; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};
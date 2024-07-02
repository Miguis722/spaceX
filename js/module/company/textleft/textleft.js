import { getAllCompany, getCompanyById } from "../../../components/company.js";

const tableleftCompany = async (companyData) => {
    const { 
        links: { website, flickr, twitter, elon_twitter }, 
        headquarters: { address, city, state } 
    } = companyData; // Desestructuramos los datos necesarios del objeto de la empresa

    let plantilla = ''; // Dejamos la plantilla vacía o en blanco.
    plantilla = /*html*/`
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="../storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>Social Links</h3>
                <small><a href="${website}">Website</a></small><br>
                <small><a href="${flickr}">Flickr</a></small><br>
                <small><a href="${twitter}">Twitter</a></small><br>
                <small><a href="${elon_twitter}">Elon's Twitter</a></small>
            </div>
        </div>
    </nav>
    <nav class="main_nav_description" id="nav_main">
        <div class="description_item" id="description_item">
            <div class="images_nav_left_div" id="div_images_left">
                <img src="../storage/images/icons/mech.svg">
            </div>
            <div class="information_about_left" id="nav_left_div">
                <h3>Ubication</h3>
                <small>${address}, ${city}, ${state}</small>
            </div>
        </div>
    </nav>
    `;
    return plantilla; // Retornamos la plantilla con la información.
};

// Función para seleccionar la parte de la izquierda y hacerlo funcional
export const updateLeftTextsCompany = async (id) => {
    try {
        const companyData = await getAllCompany(); // Obtener todos los cohetes
        const selectedCompany = getCompanyById(companyData, id); // Obtener cohete por ID
        if (selectedCompany) {
            const textleftTemplate = await tableleftCompany(selectedCompany); // Generar plantilla HTML
            document.getElementById("container_main_nav_description").innerHTML = textleftTemplate; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del ship con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};

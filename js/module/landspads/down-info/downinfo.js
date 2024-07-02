import { getAllLandspads, getLandspadsById } from '../../../components/landspads.js';

// Función para generar la información debajo de la historia
const generateInformationBelowLandspads = async (LandspadsData) => {
    const { full_name, landing_attempts, landing_successes, type, status, latitude, longitude } = LandspadsData; // Se obtienen las propiedades específicas

    let plantilla = /*html*/`
    <div class="information_table_left">
        <h3>INFORMATION</h3>
        <hr>
        <div class="specific_information_table_left">
            <div>
                <span class="left">Full name</span>
                <strong class="right">${full_name}</strong>
            </div>
            <div>
                <span class="left">Number ofLanding Attempts</span>
                <strong class="right">${landing_attempts}</strong>
            </div>
            <div>
                <span class="left">Number of Landing Successes</span>
                <strong class="right">${landing_successes}</strong>
            </div>
        </div>
    </div>

    <div class="information_table_right">
        <h3>COORDS - SPECIFIC INFO</h3>
        <hr>
        <div class="specific_information_table_right">
            <div>
                <span class="left">Type</span>
                <strong class="right">${type}</strong>
            </div>
            <div>
                <span class="left">Status</span>
                <strong class="right">${status}</strong>
            </div>
            <div>
                <span class="left">Latitude</span>
                <strong class="right">${latitude}</strong>
            </div>
            <div>
                <span class="left">Longitude</span>
                <strong class="right">${longitude}</strong>
            </div>
        </div>
    </div>
    `;

    return plantilla; // Retornamos la plantilla con la información
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowLandspads = async (id) => {
    try {
        const LandspadsData = await getAllLandspads(); // Obtener todos los datos de historias
        const selectedLandspads = getLandspadsById(LandspadsData, id); // Obtener historia por ID
        if (selectedLandspads) {
            const informationBelow = await generateInformationBelowLandspads(selectedLandspads); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la historia con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la parte inferior... ', error);
    }
};

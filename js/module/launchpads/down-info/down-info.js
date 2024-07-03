import { getAllLaunchpads, getLaunchpadsById } from '../../../components/launchpads.js';

// Función para generar la información debajo de la historia
const generateInformationBelowLaunchpads = async (LaunchpadsData) => {
    const { timezone, launch_attempts, launch_successes, type, status, latitude, longitude } = LaunchpadsData; // Se obtienen las propiedades específicas

    let plantilla = /*html*/`
    <div class="information_table_left">
        <h3>INFORMATION</h3>
        <hr>
        <div class="specific_information_table_left">
            <div>
                <span class="left">Time zone</span>
                <strong class="right">${timezone}</strong>
            </div>
            <div>
                <span class="left">Number ofLaunch Attempts</span>
                <strong class="right">${launch_attempts}</strong>
            </div>
            <div>
                <span class="left">Number of Launch Successes</span>
                <strong class="right">${launch_successes}</strong>
            </div>
        </div>
    </div>

    <div class="information_table_right">
        <h3>COORDS - SPECIFIC INFO</h3>
        <hr>
        <div class="specific_information_table_right">
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
export const updateInformationBelowLaunchpads = async (id) => {
    try {
        const LaunchpadsData = await getAllLaunchpads(); // Obtener todos los datos de historias
        const selectedLaunchpads = getLaunchpadsById(LaunchpadsData, id); // Obtener historia por ID
        if (selectedLaunchpads) {
            const informationBelow = await generateInformationBelowLaunchpads(selectedLaunchpads); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la historia con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la parte inferior... ', error);
    }
};

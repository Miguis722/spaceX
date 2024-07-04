import { getAlllaunches, getLaunchById } from '../../../components/launches.js';

// Función para generar la información debajo de la historia
const generateInformationBelowLaunches = async (launchData) => {
    const { name, details, static_fire_date_utc, flight_number, date_utc } = launchData; // Se obtienen las propiedades específicas

    let plantilla = /*html*/`
    <div class="information_table_left">
        <h3>INFORMATION</h3>
        <hr>
        <div class="specific_information_table_left">
            <div>
                <span class="left">Name</span>
                <strong class="right">${name}</strong>
            </div>
            <div>
                <span class="left">Flight Number</span>
                <strong class="right">${flight_number}</strong>
            </div>
            <div>
                <span class="left">Static Fire Date (UTC)</span>
                <strong class="right">${static_fire_date_utc}</strong>
            </div>
        </div>
    </div>

    <div class="information_table_right">
        <h3>DETAILS</h3>
        <hr>
        <div class="specific_information_table_right">
            <div>
                <span class="left">Details</span>
                <strong class="right">${details}</strong>
            </div>
            <div>
                <span class="left">Date (UTC)</span>
                <strong class="right">${date_utc}</strong>
            </div>
        </div>
    </div>
    `;

    return plantilla;
};

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowLaunches = async (id) => {
    try {
        const launchesData = await getAlllaunches(); // Obtener todos los datos de lanzamientos
        const selectedLaunch = getLaunchById(launchesData, id); // Obtener lanzamiento por ID
        if (selectedLaunch) {
            const informationBelow = await generateInformationBelowLaunches(selectedLaunch); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la información del lanzamiento con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la parte inferior... ', error);
    }
};

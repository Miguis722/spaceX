import { getAllstarlink, getstarlinkById } from '../../../components/starlink.js';

// Función para generar la información debajo de la historia
const generateInformationBelowstarlink = async (starlinkData) => {
    const { OBJECT_NAME, OBJECT_ID, EPOCH, MEAN_MOTION, ECCENTRICITY, INCLINATION, RA_OF_ASC_NODE, ARG_OF_PERICENTER, PERIOD, COUNTRY_CODE, LAUNCH_DATE, DECAY_DATE } = starlinkData.spaceTrack;

    let plantilla = /*html*/`
    <div class="information_table_left">
        <h3>INFORMATION</h3>
        <hr>
        <div class="specific_information_table_left">
            <div>
                <span class="left">Object Name</span>
                <strong class="right">${OBJECT_NAME}</strong>
            </div>
            <div>
                <span class="left">Object ID</span>
                <strong class="right">${OBJECT_ID}</strong>
            </div>
            <div>
                <span class="left">Epoch</span>
                <strong class="right">${EPOCH}</strong>
            </div>
            <div>
                <span class="left">Mean Motion</span>
                <strong class="right">${MEAN_MOTION}</strong>
            </div>
            <div>
                <span class="left">Eccentricity</span>
                <strong class="right">${ECCENTRICITY}</strong>
            </div>
            <div>
                <span class="left">Inclination</span>
                <strong class="right">${INCLINATION}</strong>
            </div>
            <div>
                <span class="left">RA of Ascending Node</span>
                <strong class="right">${RA_OF_ASC_NODE}</strong>
            </div>
            <div>
                <span class="left">Argument of Pericenter</span>
                <strong class="right">${ARG_OF_PERICENTER}</strong>
            </div>
            <div>
                <span class="left">Period</span>
                <strong class="right">${PERIOD}</strong>
            </div>
        </div>
    </div>

    <div class="information_table_right">
        <h3>SPECIFIC INFO</h3>
        <hr>
        <div class="specific_information_table_right">
            <div>
                <span class="left">Country Code</span>
                <strong class="right">${COUNTRY_CODE}</strong>
            </div>
            <div>
                <span class="left">Launch Date</span>
                <strong class="right">${LAUNCH_DATE}</strong>
            </div>
            <div>
                <span class="left">Decay Date</span>
                <strong class="right">${DECAY_DATE}</strong>
            </div>
        </div>
    </div>
    `;
    return plantilla;
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowstarlink = async (id) => {
    try {
        const starlinkData = await getAllstarlink(); // Obtener todos los datos de starlink
        const selectedstarlink = getstarlinkById(starlinkData, id); // Obtener starlink por ID
        if (selectedstarlink) {
            const informationBelow = await generateInformationBelowstarlink(selectedstarlink); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró el objeto STARLINK con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la parte inferior... ', error);
    }
};

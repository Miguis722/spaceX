import { getAllHistory, getHistoryById } from '../../../components/history.js';

// Función para generar la información debajo de la historia
const generateInformationBelowHistory = async (historyData) => {
    const { event_date_utc, event_date_unix, id } = historyData; // Se obtienen las propiedades específicas

    let plantilla = /*html*/`
        <div class="information_table_left">
            <h3>Event Date (UTC)</h3>
            <hr>
            <div class="specific_information_table_left">
                <div>
                    <span class="left">Date</span>
                    <strong class="right">${event_date_utc}</strong>
                </div>
                <div>
                    <span class="left">Unix Timestamp</span>
                    <strong class="right">${event_date_unix}</strong>
                </div>
            </div>
        </div>
    `;

    return plantilla; // Retornamos la plantilla con la información
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowHistory = async (id) => {
    try {
        const historyData = await getAllHistory(); // Obtener todos los datos de historias
        const selectedHistory = getHistoryById(historyData, id); // Obtener historia por ID
        if (selectedHistory) {
            const informationBelow = await generateInformationBelowHistory(selectedHistory); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la historia con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la parte inferior... ', error);
    }
};

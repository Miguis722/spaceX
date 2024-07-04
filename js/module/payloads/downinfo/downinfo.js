import { getAllpayloads, getpayloadsById } from '../../../components/payloads.js';

// Función para generar la información debajo de la historia
const generateInformationBelowpayloads = async (payloadsData) => {
    const { orbit, reference_system, type, mass_kg, mass_lbs, longitude } = payloadsData;

    let plantilla = /*html*/`
    <div class="information_table_left">
        <h3>INFORMATION</h3>
        <hr>
        <div class="specific_information_table_left">
            <div>
                <span class="left">Orbit</span>
                <strong class="right">${orbit}</strong>
            </div>
            <div>
                <span class="left">Reference System</span>
                <strong class="right">${reference_system}</strong>
            </div>
            <div>
                <span class="left">Type</span>
                <strong class="right">${type}</strong>
            </div>
        </div>
    </div>

    <div class="information_table_right">
        <h3>SPECIFIC INFO</h3>
        <hr>
        <div class="specific_information_table_right">
            <div>
                <span class="left">Mass (kg)</span>
                <strong class="right">${mass_kg}</strong>
            </div>
            <div>
                <span class="left">Mass (lbs)</span>
                <strong class="right">${mass_lbs}</strong>
            </div>
            <div>
                <span class="left">Longitude</span>
                <strong class="right">${longitude}</strong>
            </div>
        </div>
    </div>
    `;
    return plantilla;
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowpayloads = async (id) => {
    try {
        const payloadsData = await getAllpayloads(); // Obtener todos los datos de historias
        const selectedpayloads = getpayloadsById(payloadsData, id); // Obtener historia por ID
        if (selectedpayloads) {
            const informationBelow = await generateInformationBelowpayloads(selectedpayloads); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la historia con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la parte inferior... ', error);
    }
};

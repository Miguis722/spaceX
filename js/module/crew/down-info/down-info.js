import { getAllCrew, getCrewById } from '../../../components/crew.js';

const generateInformationBelowCrew = async (crewData) => {
    const { name, agency, status} = crewData;
    let plantilla = '';
    plantilla = /*html*/`
        <div class="information_table_left">
            <h3>INFORMATION EMPLOYEE</h3>
            <hr>
            <div class="specific_information_table_left">
                <div>
                    <span class="left">Name of the Employee</span>
                    <strong class="right">${name}</strong>
                </div>
                <div>
                    <span class="left">Agency</span>
                    <strong class="right">${agency}</strong>
                </div>
            </div>
        </div>

        <div class="information_table_right">
            <h3>INFORMATION</h3>
            <hr>
            <div class="specific_information_table_right">
                <div>
                    <span class="left">Status</span>
                    <strong class="right">${status}</strong>
                </div>
            </div>
        </div>
    `;
    return plantilla; // Retornamos la plantilla con la info.
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowCrew = async (id) => {
    try {
        const crewData = await getAllCrew(); // Obtener todos los cohetes
        const selectedCrew = getCrewById(crewData, id); // Obtener cohete por ID
        if (selectedCrew) {
            const informationBelow = await generateInformationBelowCrew(selectedCrew); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};
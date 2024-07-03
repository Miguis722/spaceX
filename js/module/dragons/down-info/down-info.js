import { getAllDragons, getDragonsById } from '../../../components/dragons.js';

const generateInformationBelowDragons = async (DragonsData) => {
    const { crew_capacity, orbit_duration_yr, type, active} = DragonsData;
    let plantilla = '';
    plantilla = /*html*/`
        <div class="information_table_left">
            <h3>GENERAL INFORMATION</h3>
            <hr>
            <div class="specific_information_table_left">
                <div>
                    <span class="left">Capacity</span>
                    <strong class="right">${crew_capacity}</strong>
                </div>
                <div>
                    <span class="left">Duration in orbit (years)</span>
                    <strong class="right">${orbit_duration_yr}</strong>
                </div>
            </div>
        </div>

        <div class="information_table_right">
            <h3>SPECIFIC INFORMATION</h3>
            <hr>
            <div class="specific_information_table_right">
                <div>
                    <span class="left">Type</span>
                    <strong class="right">${type}</strong>
                </div>
                <div>
                    <span class="left">Status</span>
                    <strong class="right">${active}</strong>
                </div>
            </div>
        </div>
    `;
    return plantilla; // Retornamos la plantilla con la info.
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowDragons = async (id) => {
    try {
        const DragonsData = await getAllDragons(); // Obtener todos los cohetes
        const selectedDragons = getDragonsById(DragonsData, id); // Obtener cohete por ID
        if (selectedDragons) {
            const informationBelow = await generateInformationBelowDragons(selectedDragons); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};
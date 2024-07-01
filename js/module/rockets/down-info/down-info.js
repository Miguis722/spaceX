import { getAllRockets, getRocketById } from '../../../components/rocket.js';

const generateInformationBelowRockets = async (rocketData) => {
    const { type, stages, engines, landing_legs, first_stage, second_stage } = rocketData;
    let plantilla = '';
    plantilla = /*html*/`
        <div class="information_table_left">
            <h3>INFORMATION ROCKET</h3>
            <hr>
            <div class="specific_information_table_left">
                <div>
                    <span class="left">Type</span>
                    <strong class="right">${type}</strong>
                </div>
                <div>
                    <span class="left">Number of stages</span>
                    <strong class="right">${stages}</strong>
                </div>
                <div>
                    <span class="left">Number of engines</span>
                    <strong class="right">${engines.number}</strong>
                </div>
                <div>
                    <span class="left">Landing legs</span>
                    <strong class="right">${landing_legs.number}</strong>
                </div>
                <div>
                    <span class="left">Leg material</span>
                    <strong class="right">${landing_legs.material || 'Not Available'}</strong>
                </div>
            </div>
        </div>

        <div class="information_table_right">
            <h3>ENGINE INFORMATION</h3>
            <hr>
            <div class="specific_information_table_right">
                <div>
                    <span class="left">Type</span>
                    <strong class="right">${engines.type}</strong>
                </div>
                <div>
                    <span class="left">Maximum power loss</span>
                    <strong class="right">${engines.engine_loss_max}</strong>
                </div>
                <div>
                    <span class="left">Engine availability</span>
                    <strong class="right">${engines.reusable ? 'Reusable' : 'Not Reusable'}</strong>
                </div>
                <div>
                    <span class="left">Number of engines</span>
                    <strong class="right">${engines.engines}</strong>
                </div>
                <div>
                    <span class="left">Stage 1 fuel</span>
                    <strong class="right">${first_stage.fuel_amount_tons} tons</strong>
                </div>
                <div>
                    <span class="left">Stage 2 fuel</span>
                    <strong class="right">${second_stage.payloads.option_1}</strong>
                </div>
            </div>
        </div>
    `;
    return plantilla; // Retornamos la plantilla con la info.
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowRockets = async (id) => {
    try {
        const rocketsData = await getAllRockets(); // Obtener todos los cohetes
        const selectedRocket = getRocketById(rocketsData, id); // Obtener cohete por ID
        if (selectedRocket) {
            const informationBelow = await generateInformationBelowRockets(selectedRocket); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};

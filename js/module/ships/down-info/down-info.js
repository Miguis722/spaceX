import { getAllShips, getShipById } from "../../../components/ships.js";

const generateInformationBelowShips = async (shipsData) => {
    const { type, roles, imo, mmsi, abs, class: shipClass, mass_kg, mass_lbs, year_built, home_port, link } = shipsData;
    let plantilla = '';
    plantilla = /*html*/`
        <div class="information_table_left">
            <h3>INFORMATION SHIP</h3>
            <hr>
            <div class="specific_information_table_left">
                <div>
                    <span class="left">Type</span>
                    <strong class="right">${type || 'N/A'}</strong>
                </div>
                <div>
                    <span class="left">Roles</span>
                    <strong class="right">${roles.join(', ') || 'N/A'}</strong>
                </div>
                <div>
                    <span class="left">IMO</span>
                    <strong class="right">${imo || 'N/A'}</strong>
                </div>
                <div>
                    <span class="left">Year of made</span>
                    <strong class="right">${year_built || 'N/A'}</strong>
                </div>
            </div>
        </div>

        <div class="information_table_right">
            <h3>DETAILS</h3>
            <hr>
            <div class="specific_information_table_right">
                <div>
                    <span class="left">Identification</span>
                    <strong class="right">${mmsi || 'N/A'}</strong>
                </div>
                
                <div>
                    <span class="left">Number of registration</span>
                    <strong class="right">${abs || 'N/A'}</strong>
                </div>
                <div>
                    <span class="left">Number of class</span>
                    <strong class="right">${shipClass || 'N/A'}</strong>
                </div>
                <div>
                    <span class="left">Vessel Identification</span>
                    <strong class="right">${imo || 'N/A'}</strong>
                </div>
                <div>
                    <span class="left">Mass (kg)</span>
                    <strong class="right">${mass_kg || 'N/A'}</strong>
                </div>
                <div>
                    <span class="left">Mass (lbs)</span>
                    <strong class="right">${mass_lbs || 'N/A'}</strong>
                </div>
            </div>
        </div>
    `;
    return plantilla;
};

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowShip = async (id) => {
    try {
        const shipsData = await getAllShips(); // Obtener todos los cohetes
        const selectedShip = getShipById(shipsData, id); // Obtener cohete por ID
        if (selectedShip) {
            const informationBelow = await generateInformationBelowShips(selectedShip); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};

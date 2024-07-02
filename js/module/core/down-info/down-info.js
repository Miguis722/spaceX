import { getAllCore, getCoreById } from "../../../components/core.js";

const generateInformationBelowCore = async (coreData) => {
    const { last_update, status, serial } = coreData;
    
    // Plantilla HTML para la información del núcleo
    const plantilla = /*html*/`
        <div class="information_table_left">
            <h3>INFORMATION</h3>
            <hr>
            <div class="specific_information_table_left">
                <div>
                    <span class="left">Last Update of the Core</span>
                    <strong class="right">${last_update}</strong>
                </div>
            </div>
        </div>

        <div class="information_table_right">
            <h3>INFORMATION ABOUT THE CORE</h3>
            <hr>
            <div class="specific_information_table_right">
                <div>
                    <span class="left">Status</span>
                    <strong class="right">${status}</strong>
                </div>
                <div>
                    <span class="left">Number of serie</span>
                    <strong class="right">${serial}</strong>
                </div>
            </div>
        </div>
    `;
    
    return plantilla; // Retorna la plantilla con la información del núcleo
};


// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowCore = async (id) => {
    try {
        const coreData = await getAllCore(); // Obtener todos los cohetes
        const selectedCore = getCoreById(coreData, id); // Obtener cohete por ID
        if (selectedCore) {
            const informationBelow = await generateInformationBelowCore(selectedCore); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del core con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};
import { getAllcapsules, getcapsulesById } from '../../../components/capsules.js';

// Función para generar la información debajo de la historia
const generateInformationBelowcapsules = async (capsulesData) => {
    const { water_landings, land_landings, last_update, type, status, reuse_count } = capsulesData; // Se obtienen las propiedades específicas

    let plantilla = /*html*/`
    <div class="information_table_left">
        <h3>INFORMATION</h3>
        <hr>
        <div class="specific_information_table_left">
            <div>
                <span class="left">Times arrived in the water</span>
                <strong class="right">${water_landings}</strong>
            </div> 
            <div>
                <span class="left">Times arrived in the ground</span>
                <strong class="right">${land_landings}</strong>
            </div>
            <div>
                <span class="left">Last update</span>
                <strong class="right">${last_update}</strong>
            </div>
            
        </div>
    </div>

    <div class="information_table_right">
        <h3>CAPSULE INFORMATION</h3>
        <hr>
        <div class="specific_information_table_right">
            <div>
                <span class="left">Type</span>
                <strong class="right">${type}</strong>
            </div>
            <div>
                <span class="left">Status</span>
                <strong class="right">${status}</strong>
            </div>
            <div>
                <span class="left">Times re-used</span>
                <strong class="right">${reuse_count}</strong>
            </div>
        </div>
    </div>
    `;

    return plantilla; // Retornamos la plantilla con la información
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowcapsules = async (id) => {
    try {
        const capsulesData = await getAllcapsules(); // Obtener todos los datos de historias
        const selectedcapsules = getcapsulesById(capsulesData, id); // Obtener historia por ID
        if (selectedcapsules) {
            const informationBelow = await generateInformationBelowcapsules(selectedcapsules); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la historia con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la parte inferior... ', error);
    }
};

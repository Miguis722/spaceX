import { getAllCompany, getCompanyById} from '../../../components/company.js';

const generateInformationBelowCompany = async (companyData) => {
    const { founder, ceo, cto, coo, cto_propulsion, employees, valuation, vehicles, launch_sites } = companyData;
    let plantilla = '';
    plantilla = /*html*/`
        <div class="information_table_left">
            <h3>INFORMATION</h3>
            <hr>
            <div class="specific_information_table_left">
                <div>
                    <span class="left">FOUNDER</span>
                    <strong class="right">${founder}</strong> <!-- founder -->
                </div>
                <div>
                    <span class="left">CEO</span>
                    <strong class="right">${ceo}</strong> <!-- ceo -->
                </div>
                <div>
                    <span class="left">CTO</span>
                    <strong class="right">${cto}</strong> <!-- cto -->
                </div>
                <div>
                    <span class="left">COO</span>
                    <strong class="right">${coo}</strong> <!-- coo -->
                </div>
                <div>
                    <span class="left">CTO in propultion</span>
                    <strong class="right">${cto_propulsion}</strong> <!-- cto_propulsion -->
                </div>
            </div>
        </div>

        <div class="information_table_right">
            <h3>COMPANY INFORMATION</h3>
            <hr>
            <div class="specific_information_table_right">
                <div>
                    <span class="left">Employees</span>
                    <strong class="right">${employees}</strong> <!-- employees -->
                </div>
                <div>
                    <span class="left">Value of the Company</span> 
                    <strong class="right">${valuation}</strong> <!-- valuation -->
                </div>
                <div>
                    <span class="left">Rockets</span>
                    <strong class="right">${vehicles}</strong> <!-- vehicles -->
                </div>
                <div>
                    <span class="left">Launch Sites</span>
                    <strong class="right">${launch_sites}</strong> <!-- launch_sites -->
                </div>
            </div>
        </div>
    `;
    return plantilla; // Retornamos la plantilla con la info.
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationBelowCompany = async (id) => {
    try {
        const companyData = await getAllCompany(); // Obtener todos los cohetes
        const selectedCompany = getCompanyById(companyData, id); // Obtener cohete por ID
        if (selectedCompany) {
            const informationBelow = await generateInformationBelowCompany(selectedCompany); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del cohete con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la izquierda... ', error);
    }
};

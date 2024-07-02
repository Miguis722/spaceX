import { getAllCompany, getCompanyById } from "../../../components/company.js";
import { idsbuttonsCompany } from "../buttons/idsbutton.js";


// Función para cambiar el titulo
export const titleChangerCompany = async (companyData) => {
    let { name } = companyData;
    let plantilla = `<h1>${name}</h1>`; // Generamos el título usando el nombre del cohete
    return plantilla; // Retornamos la plantilla con el título
}

// companyData
// selectedCompany

export const updateTitleByCompanyId = async (id) => { 
    try { // Prevenimos errores a la hora de cambiar el titulo
        const companyData = await getAllCompany(); // Obtiene todos las company
        const selectedCompany = getCompanyById(companyData, id); // Seleccionamos el dato por el id
        if (selectedCompany) {
            const titleTemplate = await titleChangerCompany(selectedCompany); // Generamos el titulo
            document.getElementById("title").innerHTML = titleTemplate;
        } else {
            console.error(`No se encontró la company con ID: ${id}`); // Si no se encuentra el cohete deseado con el id (x), entonces lanzara este error.
        }
    } catch (error) {
        console.error('Error al actualizar el título... ', error); // Evitamos los errores, por lo que usamos un catch para atrapar posible error.
        // En cuyo caso no deje actualizar el titulo por x o y razón, o hubo un error al pedir la petición al servidor, entonces mostrara el mensaje precargado para este error.
    }
}


export function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Limpiar el contenedor de botones

    idsbuttonsCompany.forEach((id, index) => {
        const anchor = document.createElement('a');
        anchor.href = '#';

        const button = document.createElement('button');
        button.className = 'button_main_page';
        button.id = id;
        button.textContent = index + 1; // Mostrar el número secuencial

        // Añadir evento click al botón
        button.addEventListener('click', async () => {
            await updateTitleByCompanyId(id); // Llama a la función para actualizar el título con el ID correspondiente
        });

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}
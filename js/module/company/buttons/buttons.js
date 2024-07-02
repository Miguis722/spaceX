import { idsbuttonsCompany } from "./idsbutton";

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

        anchor.appendChild(button);
        buttonsContainer.appendChild(anchor);
    });
}
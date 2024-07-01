import { ids } from './idsbuttons.js';

export function generateButtons() {
    const buttonsContainer = document.getElementById('buttonsContainer');
    buttonsContainer.innerHTML = ''; // Limpiamos el container de botones

    ids.forEach((id, index) => {
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

/*
Aqui estamos haciendo una función que genere botones dependiendo de la cantidad de ID's que haya
es decir, que si hay 60 ID's, se generaran 60 botones, para cada uno de esos 60 ID's
*/

import { updateInformationBelowCrew } from "./down-info/down-info.js";
import { updateImagesCrew } from "./images/images.js";
import { generateButtons } from "./title/title.js";

// Llamar a la función para generar los botones dinámicamente
generateButtons();


document.addEventListener('DOMContentLoaded', async () => {
    const buttonsContainer = document.getElementById('buttonsContainer');

    // Listener para actualizar el contenido al hacer clic en los botones
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName === 'BUTTON') {
            const crewId = event.target.id; // Obtener el ID del botón clickeado

            // Llamar a las funciones para actualizar el contenido con el ID del cohete
            // await updateLeftTextsCrew(crewId);
            await updateInformationBelowCrew(crewId);
            await updateImagesCrew(crewId);

        }
    });

    // Simular el clic en el primer botón cuando se carga la página
    const firstButton = buttonsContainer.querySelector('button');
    if (firstButton) {
        firstButton.click();
    }
});


// crewData
// selectedCrew
// crewId
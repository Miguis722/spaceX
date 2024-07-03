import { updateImagesroadster } from "./images/images.js";
import { generateButtons } from "./title/title.js";

generateButtons();

document.addEventListener('DOMContentLoaded', async () => {
    const buttonsContainer = document.getElementById('buttonsContainer');

    // Listener para actualizar el contenido al hacer clic en los botones
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName === 'BUTTON') {
            const roadsterId = event.target.id; // Obtener el ID del botón clickeado

            // Llamar a las funciones para actualizar el contenido con el ID del cohete
            // await updateLeftTextsroadster(roadsterId);
            // await updateInformationBelowroadster(roadsterId);
            await updateImagesroadster(roadsterId);
        }
    });

    // Simular el clic en el primer botón cuando se carga la página
    const firstButton = buttonsContainer.querySelector('button');
    if (firstButton) {
        firstButton.click();
    }
});
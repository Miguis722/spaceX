import { generateButtons } from './title/title.js';
import { updateLeftTextsRocket } from './textleft/textleft.js';
import { updateInformationBelowRockets } from './down-info/down-info.js';
import { updateImagesRockets } from './images/images.js';

// Llamar a la función para generar los botones dinámicamente
generateButtons();

// Llamar a la función para cambiar el texto de la izquierda
document.addEventListener('DOMContentLoaded', async () => {
    const buttonsContainer = document.getElementById('buttonsContainer');
    
    // Listener para actualizar el texto izquierdo cuando se hace clic en los botones
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName === 'BUTTON') {
            const rocketId = event.target.id; // Obtiene el ID del botón clickeado
            await updateLeftTextsRocket(rocketId); // Llama a la función para actualizar el texto izquierdo con el ID del cohete
            await updateInformationBelowRockets(rocketId); // Llama a la función para actualizar la información inferior con el ID del cohete
            await updateImagesRockets(rocketId); // Llama a la función para actualizar las imágenes con el ID del cohete
        }
    });

    // Simular el clic en el botón 1 cuando se cargue la página
    const firstButton = buttonsContainer.querySelector('button'); // Encuentra el primer botón
    if (firstButton) {
        firstButton.click();
    }
});
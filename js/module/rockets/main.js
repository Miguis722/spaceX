import { generateButtons } from './title/title.js';
import { updateLeftTextsRocket } from './textleft/textleft.js';
import { updateInformationBelowRockets } from './down-info/down-info.js';

// Llamar a la función para generar los botones dinámicamente
generateButtons();

// Llamar a la función para cambiar el texto de la izquierda
document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.getElementById('buttonsContainer'); // Ajusta el ID según tu estructura HTML
    
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName == 'BUTTON') {
            const rocketId = event.target.id; // Obtiene el ID del botón clickeado
            await updateLeftTextsRocket(rocketId); // Llama a la función para actualizar el texto izquierdo con el ID del cohete
        }
    });
    
    // Listener para actualizar la información inferior cuando se hace clic en los botones
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName == 'BUTTON') {
            const rocketId = event.target.id; // Obtiene el ID del botón clickeado
            await updateInformationBelowRockets(rocketId); // Llama a la función para actualizar la información inferior con el ID del cohete
        }
    });
});
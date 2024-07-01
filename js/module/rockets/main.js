import { generateButtons } from './title/title.js';
import { updateLeftTextsRocket } from './textleft/textleft.js';
import { updateInformationBelowRockets } from './down-info/down-info.js';
import { updateImagesRockets } from './images/images.js'; // Importar la función

// Llamar a la función para generar los botones dinámicamente
generateButtons();

// Llamar a la función para cambiar el texto de la izquierda y actualizar la información inferior e imágenes
document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.getElementById('buttonsContainer'); // Ajusta el ID según tu estructura HTML
    
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName === 'BUTTON') {
            const rocketId = event.target.id; // Obtiene el ID del botón clickeado
            
            // Actualizar el texto de la izquierda
            await updateLeftTextsRocket(rocketId);
            
            // Actualizar la información inferior
            await updateInformationBelowRockets(rocketId);
            
            // Actualizar las imágenes
            await updateImagesRockets(rocketId);
        }
    });
});

import { generateButtons } from './title/title.js';
import { updateLeftTextsRocket } from './textleft/textleft.js';

// Llamar a la función para generar los botones dinámicamente
generateButtons();

// Llamar a la función de cambiar el texto de la izqueirda
document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.getElementById('buttonsContainer'); // Ajusta el ID según tu estructura HTML
    
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName == 'BUTTON') {
            const rocketId = event.target.id; // Obtiene el ID del botón clickeado
            await updateLeftTextsRocket(rocketId); // Llama a la función para actualizar el texto izquierdo con el ID del cohete
        }
    });
});

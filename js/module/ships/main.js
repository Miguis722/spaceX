/* FUNCIÓN DE GENERAR BOTONES DEPENDIENDO LA CANTIDAD DE ID's */

import { generateButtons } from './title/title.js';
// Ejecuta la función para generar los botones con IDs
generateButtons();

document.addEventListener('DOMContentLoaded', async () => {
    const buttonsContainer = document.getElementById('buttonsContainer');

    // Listener para actualizar el contenido al hacer clic en los botones
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName === 'BUTTON') {
            const shipId = event.target.id; // Obtener el ID del botón clickeado
  
            // Llamar a las funciones para actualizar el contenido con el ID del cohete
            await updateLeftTextsShip(shipId);
            await updateInformationBelowShip(shipId);
            await updateImagesShips(shipId);
        }
});
     // Simular el clic en el primer botón cuando se carga la página
     const firstButton = buttonsContainer.querySelector('button');
     if (firstButton) {
         firstButton.click();
     }
 });
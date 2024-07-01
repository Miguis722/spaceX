import { updateImagesShips } from './images/images.js';
import { updateLeftTextsShip } from './textleft/textleft.js';
import { generateButtons } from './title/title.js';

// // Ejecuta la función para generar los botones con IDs
// generateButtons();

// document.addEventListener('DOMContentLoaded', async () => {
//     const buttonsContainer = document.getElementById('buttonsContainer');

//     // Listener para actualizar el contenido al hacer clic en los botones
//     buttonsContainer.addEventListener('click', async (event) => {
//         if (event.target && event.target.nodeName === 'BUTTON') {
//             const shipId = event.target.id; // Obtener el ID del botón clickeado
  
//             // Llamar a las funciones para actualizar el contenido con el ID del cohete
//             await updateLeftTextsShip(shipId);
//             await updateInformationBelowShip(shipId);
//             await updateImagesShips(shipId);

//             // Obtener los datos de empuje en vacío del motor del cohete desde la API
//             const thrustVacuumData = await getAllRocketEngineThrustVacuumTotal(rocketId);
//             await informRocketEngineThrustVacuum(thrustVacuumData);
//         }
// });
//      // Simular el clic en el primer botón cuando se carga la página
//      const firstButton = buttonsContainer.querySelector('button');
//      if (firstButton) {
//          firstButton.click();
//      }
//  });

// Ejecuta la función para generar los botones con IDs
generateButtons();

document.addEventListener('DOMContentLoaded', async () => {
    const buttonsContainer = document.getElementById('buttonsContainer');

    // Listener para actualizar el contenido al hacer clic en los botones
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName === 'BUTTON') {
            const shipId = event.target.id; // Obtener el ID del botón clickeado
  
            // Llamar a la función para actualizar las imágenes con el ID del ship
            await updateImagesShips(shipId);

            // Llamar a la función para actualizar los textos de la izquierda con el ID del ship
            await updateLeftTextsShip(shipId);

            // Aquí podrías llamar a otras funciones para actualizar más elementos según sea necesario
            // await updateInformationBelowShip(shipId);

            // Simular que estas funciones están definidas y hacen algo similar a updateImagesShips
            console.log(`Actualizando otros elementos para el ship con ID: ${shipId}`);

            // Ejemplo de uso de funciones no definidas
            // const thrustVacuumData = await getAllRocketEngineThrustVacuumTotal(rocketId);
            // await informRocketEngineThrustVacuum(thrustVacuumData);
        }
    });

    // Simular el clic en el primer botón cuando se carga la página
    const firstButton = buttonsContainer.querySelector('button');
    if (firstButton) {
        firstButton.click();
    }
});
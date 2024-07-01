import { generateButtons } from './title/title.js';
import { updateLeftTextsRocket } from './textleft/textleft.js';
import { updateInformationBelowRockets } from './down-info/down-info.js';
import { updateImagesRockets } from './images/images.js';
import { informRocketEngineThrustVacuum } from '../../module/rockets/above-info/above-info.js';
import { getAllRocketEngineThrustVacuumTotal } from '../../components/rocket.js';

// Llamar a la función para generar los botones dinámicamente
generateButtons();

document.addEventListener('DOMContentLoaded', async () => {
    const buttonsContainer = document.getElementById('buttonsContainer');

    // Listener para actualizar el contenido al hacer clic en los botones
    buttonsContainer.addEventListener('click', async (event) => {
        if (event.target && event.target.nodeName === 'BUTTON') {
            const rocketId = event.target.id; // Obtener el ID del botón clickeado

            // Llamar a las funciones para actualizar el contenido con el ID del cohete
            await updateLeftTextsRocket(rocketId);
            await updateInformationBelowRockets(rocketId);
            await updateImagesRockets(rocketId);

            // Obtener los datos de empuje en vacío del motor del cohete desde la API
            const thrustVacuumData = await getAllRocketEngineThrustVacuumTotal(rocketId);
            await informRocketEngineThrustVacuum(thrustVacuumData);
        }
    });

    // Simular el clic en el primer botón cuando se carga la página
    const firstButton = buttonsContainer.querySelector('button');
    if (firstButton) {
        firstButton.click();
    }
});


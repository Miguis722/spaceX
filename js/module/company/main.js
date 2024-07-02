import { generateButtons } from "./title/title.js";

// Llamar a la función para generar los botones dinámicamente
generateButtons();

document.addEventListener('DOMContentLoaded', async () => {
    const buttonsContainer = document.getElementById('buttonsContainer');

    // Listener para actualizar el contenido al hacer clic en los botones
    // buttonsContainer.addEventListener('click', async (event) => {
    //     if (event.target && event.target.nodeName === 'BUTTON') {
    //         const rocketId = event.target.id; // Obtener el ID del botón clickeado

    //         // Llamar a las funciones para actualizar el contenido con el ID del cohete
    //         await updateLeftTextsCompany(rocketId);
    //         await updateInformationBelowCompany(rocketId);
    //         await updateImagesCompany(rocketId);

    //         // Obtener los datos de empuje en vacío del motor del cohete desde la API
    //         const thrustVacuumData = await getAllRocketEngineThrustVacuumTotal(rocketId);
    //         await informRocketEngineThrustVacuum(thrustVacuumData);
    //     }
    // });

    // Simular el clic en el primer botón cuando se carga la página
    const firstButton = buttonsContainer.querySelector('button');
    if (firstButton) {
        firstButton.click();
    }
});

// companyData
// selectedCompany
// companyId
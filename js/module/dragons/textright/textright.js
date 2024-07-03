import { getAllDragons, getDragonsById } from '../../../components/dragons.js';

const generateInformationRightDragons = (DragonData) => {
    const {
        height_w_trunk: { meters: heightMeters, feet: heightFeet },
        diameter: { meters: diameterMeters, feet: diameterFeet },
        launch_payload_mass: { kg: launchMassKg, lb: launchMassLb },
        return_payload_mass: { kg: returnMassKg, lb: returnMassLb },
        pressurized_capsule: { payload_volume: { cubic_meters: pressurizedVolumeMeters, cubic_feet: pressurizedVolumeFeet } },
        trunk: { trunk_volume: { cubic_meters: trunkVolumeMeters, cubic_feet: trunkVolumeFeet } }
    } = DragonData;

    const plantilla = /*html*/`
        <div class="rocket_information_about">
            <div class="information__container">
                <div class="information">
                    <label>Dragon height with trunk:</label>
                </div>
                <div class="information_text">
                    <span>${heightMeters} M <br> ${heightFeet} F</span>
                </div>
            </div>
        </div>
        <div class="rocket_information_about">
            <div class="information__container">
                <div class="information">
                    <label>Dragon diameter:</label>
                </div>
                <div class="information_text">
                    <span>${diameterMeters} M <br> ${diameterFeet} F</span>
                </div>
            </div>
        </div>
        <div class="rocket_information_about">
            <div class="information__container">
                <div class="information">
                    <label>Launch payload mass:</label>
                </div>
                <div class="information_text">
                    <span>${launchMassKg} kg <br> ${launchMassLb} lb</span>
                </div>
            </div>
        </div>
        <div class="rocket_information_about">
            <div class="information__container">
                <div class="information">
                    <label>Return payload mass:</label>
                </div>
                <div class="information_text">
                    <span>${returnMassKg} kg <br> ${returnMassLb} lb</span>
                </div>
            </div>
        </div>
        <div class="rocket_information_about">
            <div class="information__container">
                <div class="information">
                    <label>Pressurized capsule volume:</label>
                </div>
                <div class="information_text">
                    <span>${pressurizedVolumeMeters} m³ <br> ${pressurizedVolumeFeet} ft³</span>
                </div>
            </div>
        </div>
        <div class="rocket_information_about">
            <div class="information__container">
                <div class="information">
                    <label>Trunk volume:</label>
                </div>
                <div class="information_text">
                    <span>${trunkVolumeMeters} m³ <br> ${trunkVolumeFeet} ft³</span>
                </div>
            </div>
        </div>
    `;

    return plantilla;
}

// Función para seleccionar la parte de abajo y hacerlo funcional
export const updateInformationRightDragons = async (id) => {
    try {
        const DragonsData = await getAllDragons(); // Obtener todos los dragones
        const selectedDragon = getDragonsById(DragonsData, id); // Obtener dragón por ID
        if (selectedDragon) {
            const informationRight = generateInformationRightDragons(selectedDragon); // Generar plantilla HTML
            document.querySelector(".Main_right_information").innerHTML = informationRight; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró la data del dragón con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la derecha... ', error);
    }
};

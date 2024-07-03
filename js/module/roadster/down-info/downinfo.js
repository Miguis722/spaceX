import { getAllroadster, getroadsterById } from '../../../components/roadster.js';

// Función para generar la información debajo del roadster
const generateInformationBelowroadster = async (roadsterData) => {
    const { launch_date_utc, launch_mass_kg, launch_mass_lbs, norad_id, epoch_jd, orbit_type,
            apoapsis_au, periapsis_au, semi_major_axis_au, eccentricity, inclination,
            longitude, periapsis_arg, period_days, speed_kph, speed_mph,
            earth_distance_km, earth_distance_mi, mars_distance_km, mars_distance_mi } = roadsterData;

    let plantilla = /*html*/`
    <div class="information_table_left">
        <h3>INFORMATION</h3>
        <hr>
        <div class="specific_information_table_left">
            <div>
                <span class="left">Launch Date (UTC)</span>
                <strong class="right">${new Date(launch_date_utc).toLocaleDateString()}</strong>
            </div>
            <div>
                <span class="left">Launch Mass (kg)</span>
                <strong class="right">${launch_mass_kg}</strong>
            </div>
            <div>
                <span class="left">Launch Mass (lbs)</span>
                <strong class="right">${launch_mass_lbs}</strong>
            </div>
        </div>
    </div>

    <div class="information_table_right">
        <h3>COORDS - SPECIFIC INFO</h3>
        <hr>
        <div class="specific_information_table_right">
            <div>
                <span class="left">Norad ID</span>
                <strong class="right">${norad_id}</strong>
            </div>
            <div>
                <span class="left">Epoch JD</span>
                <strong class="right">${epoch_jd}</strong>
            </div>
            <div>
                <span class="left">Orbit Type</span>
                <strong class="right">${orbit_type}</strong>
            </div>
            <div>
                <span class="left">Apoapsis (AU)</span>
                <strong class="right">${apoapsis_au}</strong>
            </div>
            <div>
                <span class="left">Periapsis (AU)</span>
                <strong class="right">${periapsis_au}</strong>
            </div>
            <div>
                <span class="left">Semi-Major Axis (AU)</span>
                <strong class="right">${semi_major_axis_au}</strong>
            </div>
            <div>
                <span class="left">Eccentricity</span>
                <strong class="right">${eccentricity}</strong>
            </div>
            <div>
                <span class="left">Inclination</span>
                <strong class="right">${inclination}</strong>
            </div>
            <div>
                <span class="left">Longitude</span>
                <strong class="right">${longitude}</strong>
            </div>
            <div>
                <span class="left">Periapsis Arg</span>
                <strong class="right">${periapsis_arg}</strong>
            </div>
            <div>
                <span class="left">Period Days</span>
                <strong class="right">${period_days}</strong>
            </div>
            <div>
                <span class="left">Speed (kph)</span>
                <strong class="right">${speed_kph}</strong>
            </div>
            <div>
                <span class="left">Speed (mph)</span>
                <strong class="right">${speed_mph}</strong>
            </div>
            <div>
                <span class="left">Earth Distance (km)</span>
                <strong class="right">${earth_distance_km}</strong>
            </div>
            <div>
                <span class="left">Earth Distance (mi)</span>
                <strong class="right">${earth_distance_mi}</strong>
            </div>
            <div>
                <span class="left">Mars Distance (km)</span>
                <strong class="right">${mars_distance_km}</strong>
            </div>
            <div>
                <span class="left">Mars Distance (mi)</span>
                <strong class="right">${mars_distance_mi}</strong>
            </div>
        </div>
    </div>
    `;

    return plantilla; // Retornamos la plantilla con la información
}

// Función para actualizar la información debajo del roadster por ID
export const updateInformationBelowroadster = async (id) => {
    try {
        const roadsterData = await getAllroadster(); // Obtener todos los roadsters
        const selectedroadster = getroadsterById(roadsterData, id); // Obtener roadster por ID
        
        if (selectedroadster) {
            const informationBelow = await generateInformationBelowroadster(selectedroadster); // Generar plantilla HTML
            document.querySelector(".section_information_inferior").innerHTML = informationBelow; // Actualizar contenido HTML
        } else {
            console.error(`No se encontró el roadster con ID: ${id}`);
        }
    } catch (error) {
        console.error('Error al actualizar la información de la parte inferior:', error);
    }
};

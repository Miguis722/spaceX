import { getAllRocketEngineThrustVacuumTotal } from '../../../components/rocket.js';

export const informRocketEngineThrustVacuum = async (thrust_vacuum) => {
    try {
        // Obtener el total de kN de vacío para los motores de cohetes
        let totalKN = await getAllRocketEngineThrustVacuumTotal();

        // Verificar que thrust_vacuum tenga valores válidos
        if (!thrust_vacuum || !thrust_vacuum.kN || !thrust_vacuum.lbf) {
            throw new Error('Datos de empuje al vacío no válidos');
        }

        // Calcular el porcentaje basado en el empuje al vacío actual
        let pocentaje = (thrust_vacuum.kN * 100) / totalKN;

        // Generar la plantilla de HTML
        let plantilla = /*html*/ `
            <div class="carousel__item">
                <div class="item__progress__bar" style="background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color-5) ${pocentaje}%, transparent 0)">
                    <div class="progress__value">
                        <strong>Atmospheric acceleration</strong>
                        <small>${pocentaje.toFixed(2)} %</small>
                        <small>${new Intl.NumberFormat('cop').format(thrust_vacuum.kN)} kN <br> ${new Intl.NumberFormat('cop').format(thrust_vacuum.lbf)} Lbf</small>
                    </div>
                </div>
            </div>
            <div class="carousel__item">
                <div class="item__progress__bar" style="background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color-5) ${pocentaje}%, transparent 0)">
                    <div class="progress__value">
                        <strong>Speed in space</strong>
                        <small>${pocentaje.toFixed(2)} %</small>
                        <small>${new Intl.NumberFormat('cop').format(thrust_vacuum.kN)} kN <br> ${new Intl.NumberFormat('cop').format(thrust_vacuum.lbf)} Lbf</small>
                    </div>
                </div>
            </div>
        `;

        // Crear un contenedor temporal para insertar el HTML generado
        let tempContainer = document.createElement('div');
        tempContainer.innerHTML = plantilla.trim();

        // Obtener el contenedor donde se insertarán los nuevos elementos
        let section_information_superior = document.querySelector(".section_information_superior");

        // Limpiar el contenedor antes de insertar nuevos elementos
        section_information_superior.innerHTML = '';

        // Insertar los nuevos elementos generados dentro del contenedor
        Array.from(tempContainer.children).forEach(div => {
            section_information_superior.appendChild(div);
        });

    } catch (error) {
        console.error('Error en informRocketEngineThrustVacuum:', error);
    }
};

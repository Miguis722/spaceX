export const getAllRockets = async() => { // Traemos toda la información de todos los cohetes.
    console.log("Trayendo todos los cohetes...");
    const url = `https://api.spacexdata.com/v4/rockets`
    const options = {
        method: 'GET'
    };
    let res= await fetch(url, options);
    let data = res.json();
    return data;
}

// const cohete1="5e9d0d95eda69955f709d1eb"    // El cohete con la información de 5e9d0d95eda69955f709d1eb
// const cohete2="5e9d0d95eda69973a809d1ec" // El cohete con la información de 5e9d0d95eda69973a809d1ec
// const cohete3="5e9d0d95eda69974db09d1ed" // El cohete con la información de 5e9d0d95eda69974db09d1ed
// const cohete4="5e9d0d96eda699382d09d1ee" // El cohete con la información de 5e9d0d96eda699382d09d1ee

// export const getAllRocketsSpecificOne = async(id) => { // Traemos toda la información de un solo cohete por medio de su ID especifico.
//     console.log("Trayendo ESE cohete...");
//     const url = `https://api.spacexdata.com/v4/rockets/${id}` // Luego, en el link colocamos al final lo que queremos buscar
//     const options = {
//         method: 'GET' // Usamos la función que consiste en traer la información
//     };
//     let res= await fetch(url, options); // Debido a que la función es asíncrona, se utiliza "await" para esperar a que la solicitud se complete.
//     let data = res.json(); // La respuesta del API (Link), lo convertimos en un formato JSON
//     return data; // Devuelve los datos obtenidos de la API en formato JSON.
// }

// getAllRocketsSpecificOne(cohete1)
// Cohete con "id": "5e9d0d95eda69974db09d1ed"



// Podemos comentar la función de getAllRocketSpecificOne debido a que en la siguiente función
// Hacemos exactamente la misma operación, pero más sencilla.

// Función para buscar un cohete en el JSON por ID
export const getRocketById = (rocketsData, id) => {
    return rocketsData.find(rocket => rocket.id === id);
}

export const getAllRocketEngineThrustVacuumTotal = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_vacuum": "desc"
                }
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let { docs: [{ engines } = { engines: {} }] } = await res.json(); // Utiliza destructuring para obtener los motores del cohete con el mayor empuje al vacío
    let totalKN = engines.thrust_vacuum; // Obtiene el empuje al vacío de los motores de cohete
    return totalKN; // Retorna el empuje al vacío total de los motores de cohete
};
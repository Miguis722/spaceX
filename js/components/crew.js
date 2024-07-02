export const getAllCrew = async () => {
    console.log("Trayendo todos los tripulantes...");
    const url = `https://api.spacexdata.com/v4/crew`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getCrewById = (crewDataArray, id) => {
    const crewData = crewDataArray.find(member => member.id === id);
    if (!crewData) {
        console.error("No se encontró el tripulante con el ID especificado:", id);
        return null;
    }
    return crewData;
}
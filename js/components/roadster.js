export const getAllroadster = async () => {
    console.log("Trayendo todos las roadster...");
    const url = `https://api.spacexdata.com/v4/roadster`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getroadsterById = (roadsterDataArray, id) => {
    // Si roadsterDataArray es un array, buscar el roadster por su ID
    if (Array.isArray(roadsterDataArray)) {
        const roadster = roadsterDataArray.find(roadster => roadster.id === id);
        if (!roadster) {
            console.error("No se encontró el roadster con el ID especificado:", id);
            return null;
        }
        return roadster;
    } else {
        // Si roadsterDataArray no es un array (por ejemplo, un objeto individual), asumir que es el roadster buscado si los IDs coinciden
        if (roadsterDataArray.id === id) {
            return roadsterDataArray;
        } else {
            console.error("No se encontró el roadster con el ID especificado:", id);
            return null;
        }
    }
}

export const getAllCore = async () => {
    console.log("Trayendo todos las core...");
    const url = `https://api.spacexdata.com/v4/cores`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getCoreById = (coreDataArray, id) => {
    const coreData = coreDataArray.find(core => core.id === id);
    if (!coreData) {
        console.error("No se encontró el núcleo con el ID especificado:", id);
        return null;
    }
    return coreData;
}


// coreData
// 
export const getAllstarlink = async () => {
    console.log("Trayendo todos las starlink...");
    const url = `https://api.spacexdata.com/v4/starlink`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getstarlinkById = (starlinkData, id) => {
    return starlinkData.find(starlink => starlink.id === id);
}
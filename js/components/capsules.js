export const getAllcapsules = async () => {
    console.log("Trayendo todos las capsules...");
    const url = `https://api.spacexdata.com/v4/capsules`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getcapsulesById = (capsulesData, id) => {
    return capsulesData.find(capsules => capsules.id === id);
}
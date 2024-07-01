export const getAllShips = async () => {
    console.log("Trayendo todos las ships...");
    const url = `https://api.spacexdata.com/v4/ships`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getShipById = (shipsData, id) => {
    return shipsData.find(ship => ship.id === id);
}
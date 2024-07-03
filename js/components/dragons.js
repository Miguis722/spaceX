export const getAllDragons = async () => {
    console.log("Trayendo todos las Dragons...");
    const url = `https://api.spacexdata.com/v4/Dragons`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getDragonsById = (DragonssData, id) => {
    return DragonssData.find(Dragons => Dragons.id === id);
}
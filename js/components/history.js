export const getAllHistory = async () => {
    console.log("Trayendo todos las history...");
    const url = `https://api.spacexdata.com/v4/history`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getHistoryById = (historyDataArray, id) => {
    const historyData = historyDataArray.find(history => history.id === id);
    if (!historyData) {
        console.error("No se encontró el history con el ID especificado:", id);
        return null;
    }
    return historyData;
}
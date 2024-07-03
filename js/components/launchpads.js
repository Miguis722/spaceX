export const getAllLaunchpads = async () => {
    console.log("Trayendo todos las Launchpads...");
    const url = `https://api.spacexdata.com/v4/Launchpads`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getLaunchpadsById = (LaunchpadsDataArray, id) => {
    const LaunchpadsData = LaunchpadsDataArray.find(Launchpads => Launchpads.id === id);
    if (!LaunchpadsData) {
        console.error("No se encontró el Launchpads con el ID especificado:", id);
        return null;
    }
    return LaunchpadsData;
}
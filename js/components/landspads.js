export const getAllLandspads = async () => {
    console.log("Trayendo todos las history...");
    const url = `https://api.spacexdata.com/v4/landpads`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getLandspadsById = (LandspadsDataArray, id) => {
    const LandspadsData = LandspadsDataArray.find(Landspads => Landspads.id === id);
    if (!LandspadsData) {
        console.error("No se encontró el Landspads con el ID especificado:", id);
        return null;
    }
    return LandspadsData;
}
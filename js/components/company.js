export const getAllCompany = async() => { // Traemos toda la información de todos los cohetes.
    console.log("Trayendo todas las company...");
    const url = `https://api.spacexdata.com/v4/company`
    const options = {
        method: 'GET'
    };
    let res= await fetch(url, options);
    let data = await res.json();
    return data;
}

export const getCompanyById = (companyData, id) => {
    if (companyData.id !== id) {
        console.error("No se encontró la empresa con el ID especificado:", id);
        return null;
    }
    return companyData;
}
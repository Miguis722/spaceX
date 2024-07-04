export const getAllpayloads = async () => {
    console.log("Trayendo todos las payloads...");
    const url = `https://api.spacexdata.com/v4/payloads`;
    const options = {
        method: 'GET'
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data;
  }
  
  export const getpayloadsById = (payloadsData, id) => {
    return payloadsData.find(payloads => payloads.id === id);
  }
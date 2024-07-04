export const getAlllaunches = async () => {
  console.log("Trayendo todos las launches...");
  const url = `https://api.spacexdata.com/v4/launches`;
  const options = {
      method: 'GET'
  };
  let res = await fetch(url, options);
  let data = await res.json();
  return data;
}

export const getLaunchById = (launchesData, id) => {
  return launchesData.find(launch => launch.id === id);
}
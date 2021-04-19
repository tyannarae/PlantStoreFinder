// how the user can retreive tempature data for the city
//set this to try cach block
export async function getWeather(lat: number, lng: number) {
  try {
    const darkSkyUrl =
      "https://api.darksky.net/forecast/8ae444357252f2b0ac14bab6b546d9ed/" +
      lat.toString() +
      "," +
      lng.toString();
    const response = await fetch(darkSkyUrl);
    const body = await response.json();
    let temp = JSON.stringify(body.currently.apparentTemperature);
    return parseFloat(temp);
  } catch (e) {
    alert(e);
  }
}

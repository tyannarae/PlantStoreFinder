// how the user can retreive tempature data for the city
//set this to try cach block
export async function getWeather(lat: string, lng: string) {
  try {
    const darkSkyUrl =
      "https://api.darksky.net/forecast/8ae444357252f2b0ac14bab6b546d9ed/" +
      lat +
      "," +
      lng;
    const response = await fetch(darkSkyUrl);
    const body = await response.json();
    let temp = JSON.stringify(body.currently.apparentTemperature);
    let tempature: number = +temp;
    return tempature;
  } catch (e) {
    alert(e);
  }
}

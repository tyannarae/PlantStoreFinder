export let temp: string;
let weather:any;


// how the user can retreive tempature data for the city 
export async function getWeather() {
  const darkSkyUrl =
    "https://api.darksky.net/forecast/8ae444357252f2b0ac14bab6b546d9ed/" +
    "30.234770,"+
    "-97.757650";
  const response = await fetch(darkSkyUrl);
  const body = await response.json();
  temp = JSON.stringify(body.currently.apparentTemperature)
}
getWeather();


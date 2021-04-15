import {Stores} from '../database/stores'
export let temp: string;
let weather:any;

const coordinates = Stores[0].mapCoordinates;
// how the user can retreive tempature data for the city 
export async function getWeather() {
  const darkSkyUrl =
    "https://api.darksky.net/forecast/8ae444357252f2b0ac14bab6b546d9ed/" +
    coordinates.lat+","+
    coordinates.lng;
  const response = await fetch(darkSkyUrl);
  const body = await response.json();
  console.log(darkSkyUrl)
  temp = JSON.stringify(body.currently.apparentTemperature)
}
getWeather();


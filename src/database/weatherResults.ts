import {Stores} from '../database/stores'
import { CityPageContext } from "../context/pages/cityPage";
export let temp: string;
let weather:any;

// how the user can retreive tempature data for the city
//set this to try cach block 
export async function getWeather(lat: string, lng: string) {
  const darkSkyUrl =
    "https://api.darksky.net/forecast/8ae444357252f2b0ac14bab6b546d9ed/" +
    lat+","+
    lng; 
  const response = await fetch(darkSkyUrl);
  const body = await response.json();
  console.log(darkSkyUrl)
  temp = JSON.stringify(body.currently.apparentTemperature)
  console.log('temp::: '+temp)
  return temp;
}


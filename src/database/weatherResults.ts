import {Stores} from '../database/stores'
export let temp: string;
let weather:any;

// how the user can retreive tempature data for the city
//set this to try cach block 
export async function getWeather(lat: string, lng: string) {
  // const darkSkyUrl =
  //   "https://api.darksky.net/forecast/8ae444357252f2b0ac14bab6b546d9ed/" +
  //   lat+","+
  //   lng; 
  // const response = await fetch(darkSkyUrl);
  // const body = await response.json();
  temp = '65' //ran out of times I can use the api so im doing this today.
  // temp = JSON.stringify(body.currently.apparentTemperature)

  return temp;
}


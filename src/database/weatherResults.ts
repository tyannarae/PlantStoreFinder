const dotenv = require("dotenv");
dotenv.config({ debug: process.env.DEBUG });
export const collectionName = "weather";
export const env = {
  port: process.env.DARK_SKY_API_KEY,
};
let weather: any;


const setSessionStorage =() =>{
  window.sessionStorage.setItem(collectionName, JSON.stringify(weather)); 
  }

// how the user can retreive tempature data for the city 
export async function getWeather() {
  const darkSkyUrl =
    "https://api.darksky.net/forecast/8ae444357252f2b0ac14bab6b546d9ed/" +
    "30.234770,"+
    "-97.757650";
  const response = await fetch(darkSkyUrl);
  const body = await response.json();
  weather = body
  setSessionStorage()
}

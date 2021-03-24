const dotenv = require("dotenv");
dotenv.config({ debug: process.env.DEBUG });
export const collectionName = "weather";
export const env = {
  port: process.env.DARK_SKY_API_KEY,
};
console.log("env.port " + env.port);
let weather: any;


const setSessionStorage =() =>{
  window.sessionStorage.setItem(collectionName, JSON.stringify(weather.currently)); 
  }

// how the user can retreive tempature data for the city 
export async function getWeather() {
  const darkSkyUrl =
    "https://api.darksky.net/forecast/" +

    "/" +
    "30.234770" +
    "," +
    "-97.757650";
  const response = await fetch(darkSkyUrl);
  const body = await response.json();
  weather = body
  setSessionStorage()
}

const dotenv = require("dotenv")
dotenv.config({ debug: process.env.DEBUG });

export const env = {
    port: process.env.DARK_SKY_API_KEY
}
console.log('env.port '+env.port)
export let weather=getWeather()





function getWeather(): Object {
const darkSkyUrl =
"https://api.darksky.net/forecast/" +
process.env.DARK_SKY_API_KEY +
"/" +
'30.234770' +
"," +
'-97.757650';

  return fetch(darkSkyUrl)
          .then(res => {
            return  weather = res.json()
          })
  
}
console.log('weathhhhher',weather)







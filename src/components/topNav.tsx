import react, { FunctionComponent } from "react";
import { MapCoordinates } from "../database/stores";
import { getWeather } from "../database/weatherResults";
const dotenv = require("dotenv"); // gives me access to my env file
dotenv.config({ debug: process.env.DEBUG });
export interface TopNavProps {
  seletedCity: MapCoordinates;
}
export const TopNav: FunctionComponent<TopNavProps> = (TopNavProps) => {
  if (!sessionStorage.weather) {
    //check if weather session storage isnt set yet.
    getWeather();
  }
  var weatherObj = JSON.parse(sessionStorage.getItem("weather") as string);
  console.log("kjdkjsdkjh", weatherObj);
  return (
    <div className="navbar">
      <div className="navbar-item">Current Temp:</div>
      <div className="navbar-item">{weatherObj.apparentTemperature}</div>
    </div>
  );
};

export default TopNav;

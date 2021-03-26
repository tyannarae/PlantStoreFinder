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
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">Home</div>
          <div className="navbar-item">
            Current Tempature {weatherObj.apparentTemperature}
          </div>
          <div className="navbar-item ">More</div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

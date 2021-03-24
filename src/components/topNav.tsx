import { FunctionComponent } from "react";
import { MapCoordinates } from "../database/stores";
import { weather } from "../database/weatherResults";
const dotenv = require("dotenv"); // gives me access to my env file
dotenv.config({ debug: process.env.DEBUG });
export interface TopNavProps {
  seletedCity: MapCoordinates;
}
export const TopNav: FunctionComponent<TopNavProps> = (TopNavProps) => {
  console.log(weather.currently);
  return <div>Current Temp:</div>;
};

export default TopNav;

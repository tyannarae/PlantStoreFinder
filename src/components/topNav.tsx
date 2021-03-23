import { FunctionComponent } from "react";
import { MapCoordinates } from "../database/stores";
import { weather } from "../database/weatherResults";
const dotenv = require("dotenv"); // gives me access to my env file
dotenv.config({ debug: process.env.DEBUG });
export interface TopNavProps {
  seletedCity: MapCoordinates;
}
export const TopNav: FunctionComponent<TopNavProps> = (TopNavProps) => {
  console.log("weather," + weather);
  const { seletedCity } = TopNavProps;
  const { lat, lng } = seletedCity;
  lat.toString();
  lng.toString();
  return <div>Top Nav!</div>;
};

export default TopNav;

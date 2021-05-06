import React, { FunctionComponent, useState, useEffect } from "react";
import { getWeather } from "../database/weatherResults";
import { CityDetails } from "../database/stores";
import "./navbar.scss";

export interface TopNavProps {
  city: CityDetails;
}
export const TopNav: FunctionComponent<TopNavProps> = (TopNavProps) => {
  const [temp, setTemp] = useState<number>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const { city } = TopNavProps;

  //anytime a new city is chosen, this function will be called to update the tempature
  const getCurrentTempature = async () => {
    let tempature = await getWeather(
      city.mapCoordinates.lat,
      city.mapCoordinates.lng
    );
    setTemp(tempature);
  };

  //get the weather data
  useEffect(() => {
    setLoading(true);
    getCurrentTempature();
    setLoading(false);
  }, [city]); //only makes call when a different city is chosen.

  //check that there is a tempature avaiable. if not, dont display the temp.
  const renderTempature = () => {
    //temp is available
    if (temp) {
      return (
        <div className="navbar-item ">
          Currently
          {" " + temp.toFixed(0) + " "}°
        </div>
      );
    }
    //no temp avaiable
    return null;
  };
  //check that city and state details are avaiable. only display what is avaiable.
  const renderCityData = () => {
    //both city and state avaiable
    if (city.city && city.state) {
      return <div className="navbar-item">{city.city + ", " + city.state}</div>;
    }
    //only city avaiable
    if (city.city && !city.state) {
      return <div className="navbar-item">{city.city}</div>;
    }
    //only state avaiable
    if (!city.city && city.state) {
      return <div className="navbar-item">{city.state}</div>;
    }
    //nothing aviable
    return null;
  };

  return isLoading ? (
    <div>loading..</div>
  ) : (
    <nav className="navbar" id="navbarBasicExample" role="navigation">
      <div className="navbar-menu menuItems" data-testid="NavbarItems">
        <div className="navbar-end">
          {renderCityData()}
          {renderTempature()}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

import React, { FunctionComponent, useState } from "react";
import classNames from "classnames";
import { getWeather, temp } from "../database/weatherResults";
import { MapCoordinates, CityDetails } from "../database/stores";

export interface TopNavProps {
  seletedCity: MapCoordinates;
  city: CityDetails;
}
export const TopNav: FunctionComponent<TopNavProps> = (TopNavProps) => {
  //set loading state here
  //call weather results
  //use effect hook works after weather results are resolved. setting loading to false
  const [isActive, setActive] = useState(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const { city } = TopNavProps;
  if (isLoading) {
    setTimeout(() => setLoading(!isLoading), 300);
  }
  function toggleActive() {
    setActive(!isActive);
  }
  getWeather(city.mapCoordinates.lat, city.mapCoordinates.lng);
  //changing the weather string into a number so that we can remove decimals later on.
  let tempature: number = +temp;

  //check that there is a tempature avaiable. if not, dont display the temp.
  const isTempSet = () => {
    //temp is available
    if (tempature) {
      return (
        <div className="navbar-item ">
          Currently
          {" " + tempature.toFixed(0) + " "}°
        </div>
      );
    }
    //no temp avaiable
    else return null;
  };
  //check that city and state details are avaiable. only display what is avaiable.
  const isCityDataSet = () => {
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
    else return null;
  };

  return isLoading ? (
    <div>loading..</div>
  ) : (
    <nav className="navbar" id="navbarBasicExample" role="navigation">
      <div
        onClick={(event) => {
          toggleActive();
        }}
        role="button"
        className={classNames(
          "navbar-burger",
          `${isActive ? "is-active" : ""}`
        )}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"> </span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <div
        className={classNames(
          `${isActive ? "is-active" : ""}`,
          "navbar-menu",
          "has-dropdown"
        )}
      >
        <div className="navbar-item has-dropdown">
          <div className="navbar-dropdown">
            <div className="navbar-end">
              {isCityDataSet()}
              {isTempSet()}
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-menu" data-testid="NavbarItems">
        <div className="navbar-end">
          {isCityDataSet()}
          {isTempSet()}
        </div>
      </div>
    </nav>
  );
  //
};

export default TopNav;

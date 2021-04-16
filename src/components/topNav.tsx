import React, { FunctionComponent, useState, useEffect } from "react";
import classNames from "classnames";
import { getWeather } from "../database/weatherResults";
import { MapCoordinates, CityDetails } from "../database/stores";

export interface TopNavProps {
  seletedCity: MapCoordinates;
  city: CityDetails;
}
export const TopNav: FunctionComponent<TopNavProps> = (TopNavProps) => {
  const [temp, setTemp] = useState<number>();
  const [isActive, setActive] = useState(false);
  const [isLoading, setLoading] = useState<boolean | null>(true);
  const { city } = TopNavProps;

  //get the weather data
  useEffect(() => {
    const tempature = async () => {
      let tempature = await getWeather(
        city.mapCoordinates.lat,
        city.mapCoordinates.lng
      );
      setTemp(tempature);
      setLoading(false);
    };
    tempature();
  }, [city]); //only updates when a different city is chosen.

  function toggleBurgerIsActive() {
    setActive(!isActive);
  }

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
      <div
        onClick={(event) => {
          toggleBurgerIsActive();
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
              {renderCityData()}
              {renderTempature()}
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-menu" data-testid="NavbarItems">
        <div className="navbar-end">
          {renderCityData()}
          {renderTempature()}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

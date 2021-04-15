import React, { FunctionComponent, useState } from "react";
import classNames from "classnames";
import { MapCoordinates, CityDeets } from "../database/stores";

export interface TopNavProps {
  seletedCity: MapCoordinates;
  city: CityDeets;
  weather: string;
}
export const TopNav: FunctionComponent<TopNavProps> = (TopNavProps) => {
  const [isActive, setActive] = useState(false);
  const { city, weather } = TopNavProps;
  function toggleActive() {
    setActive(!isActive);
  }
  //changing the weather string into a number so that we can remove decimals later on.
  const tempature: number = +weather;

  return (
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
              <div className="navbar-item">{city.city + ", " + city.state}</div>
              <div className="navbar-item ">
                Currently
                {" " + tempature.toFixed(0) + " "}°
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-menu" data-testid="NavbarItems">
        <div className="navbar-end">
          <div className="navbar-item">{city.city + ", " + city.state}</div>
          <div className="navbar-item" data-testid="temp">
            Currently
            {" " + tempature.toFixed(0) + " "}°
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;

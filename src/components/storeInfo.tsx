import React, { FunctionComponent } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { Store } from "../database/stores";
import fbLogo from "../media/fbLogo.png";
import igLogo from "../media/igLogo.png";
import "../components/storeInfo.scss";

export interface StoreInfoProps {
  store: Store;
}

export const StoreInfo: FunctionComponent<StoreInfoProps> = (
  StoreInfoProps
) => {
  const {
    bussinessName,
    website,
    address,
    phone,
    igHandle,
    fbHandle,
    blurb,
  } = StoreInfoProps.store;
  //opens a new tab for the stores website
  return (
    <div className="card-content ">
      <div className="tile is-ancestor">
        <div className="tile is-vertical ">
          <BrowserRouter>
            <div className="tile header">
              <div className="address tile is-parent is-vertical is-8">
                <div className="businessName">{bussinessName}</div>
              </div>
              <div className="tile is-parent is-vertical endItem">
                <div className="tile">
                  {fbHandle ? (
                    <Link
                      data-testid="fbHandle"
                      to="route"
                      target="_blank"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open(fbHandle);
                      }}
                    >
                      <img
                        className="linkImg tile is-vertical"
                        alt="link"
                        src={fbLogo}
                      />
                    </Link>
                  ) : null}
                  {igHandle ? (
                    <Link
                      data-testid="igHandle"
                      to="route"
                      target="_blank"
                      onClick={(event) => {
                        event.preventDefault();
                        window.open(igHandle);
                      }}
                    >
                      <img
                        className="linkImg tile is-vertical"
                        alt="link"
                        src={igLogo}
                      />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="tile">
              <div className="address tile is-parent is-vertical">
                <div>{address}</div>
              </div>
              <div className="tile is-parent is-vertical endItem">
                {website ? (
                  <Link
                    to="route"
                    target="_blank"
                    onClick={(event) => {
                      event.preventDefault();
                      window.open(website);
                    }}
                  >
                    Website
                  </Link>
                ) : null}
                <div>{phone}</div>
              </div>
            </div>
            <div className="is-parent tile">{blurb}</div>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

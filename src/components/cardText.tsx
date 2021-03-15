import React, { FunctionComponent } from "react";
import { Stores, Store } from "../database/stores";
import fbLogo from "../media/fbLogo.png";
import igLogo from "../media/igLogo.png";
import "../components/cardText.scss";

export interface cardTextProps {
  store: Store;
}
const openWebsite = (website: string) => {
  window.open(website);
};
export const CardText: FunctionComponent<cardTextProps> = (cardTextProps) => {
  const {
    bussinessName,
    website,
    address,
    phone,
    igHandle,
    fbHandle,
    blurb,
  } = cardTextProps.store;
  //opens a new tab for the stores website
  return (
    <div className="card-content ">
      <div className="tile is-ancestor">
        <div className="tile is-vertical ">
          <div className="tile header">
            <div className="address tile is-parent is-vertical is-8">
              <div className="businessName"> {bussinessName}</div>
            </div>
            <div className="tile is-parent is-vertical endItem">
              <div className="tile">
                <div
                  className="linkImgContainer"
                  onClick={(event: any) => {
                    openWebsite(fbHandle);
                  }}
                >
                  <img
                    className="linkImg tile is-vertical"
                    alt="link"
                    src={fbLogo}
                  />
                </div>
                <div
                  className="linkImgContainer"
                  onClick={(event: any) => {
                    openWebsite(igHandle);
                  }}
                >
                  <img
                    className="linkImg tile is-vertical"
                    alt="link"
                    src={igLogo}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="tile">
            <div className="address tile is-parent is-vertical">
              <div>{address}</div>
            </div>
            <div className="tile is-parent is-vertical endItem">
              <div
                onClick={(event: any) => {
                  openWebsite(website);
                }}
              >
                Visit Website
              </div>
              <div>{phone}</div>
            </div>
          </div>
          <div className="is-parent tile">{blurb}</div>
        </div>
      </div>
    </div>
  );
};

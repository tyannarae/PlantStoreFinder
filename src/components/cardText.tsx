import React, { FunctionComponent } from "react";
import { Stores, Store } from "../database/stores";

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
    <div className="card">
      <div className="card-content ">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">{bussinessName}</div>
              <div className="tile is-parent is-vertical">link</div>
            </div>
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <div>{address}</div>
              </div>
              <div className="tile is-parent is-vertical">
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
            <div className=" is-parent tile">{blurb}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { FunctionComponent, useContext } from "react";
import { CityPageContext } from "../context/pages/cityPage";
import { Store } from "../database/stores";
import fbLogo from "../media/fbLogo.png";
import igLogo from "../media/igLogo.png";
import "../components/storeDetails.scss";

export interface StoreDetailsProps {
  store: Store;
}
export const StoreDetails: FunctionComponent<StoreDetailsProps> = (
  StoreDetailsProps
) => {
  const {
    id,
    bussinessName,
    website,
    address,
    phone,
    igHandle,
    fbHandle,
    blurb,
  } = StoreDetailsProps.store;
  const { setSelectedStore, storeIdToIndexMap, stores } = useContext(
    CityPageContext
  );
  //takes the id of the store that was clicked and updates the selectedStore
  //this will be moved to the Store component once that has been created.
  const setNewStore = (id: String) => {
    setSelectedStore(stores[storeIdToIndexMap[`${id}`]]);
  };
  return (
    <div
      className="card-content "
      onClick={(event) => {
        setNewStore(id);
      }}
    >
      <div className="tile is-ancestor">
        <div className="tile is-vertical ">
          <div className="tile header">
            <div className="businessNameContainer tile is-parent is-vertical is-10">
              <div className="businessName">{bussinessName}</div>
            </div>
            <div className="tile is-parent is-vertical endItem ">
              <div className="tile">
                {fbHandle ? (
                  <a
                    className="linkImg"
                    href={fbHandle}
                    rel="noopener noreferrer"
                    data-testid="fbHandle"
                    target="_blank"
                  >
                    <img
                      className="aImg tile is-vertical"
                      alt="a"
                      src={fbLogo}
                    />
                  </a>
                ) : null}
                {igHandle ? (
                  <a
                    className="linkImg"
                    href={igHandle}
                    rel="noopener noreferrer"
                    data-testid="igHandle"
                    target="_blank"
                  >
                    <img
                      className="aImg tile is-vertical"
                      alt="a"
                      src={igLogo}
                    />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div className="tile infoDetails">
            <div className=" address tile is-parent is-vertical">
              <div>{address}</div>
            </div>
            <div className="tile is-parent is-vertical endItem">
              {phone ? <div>{phone}</div> : null}
              {website ? (
                <a
                  data-testid="websiteLink"
                  href={website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit Website
                </a>
              ) : null}
            </div>
          </div>
          <div className="blurb is-parent tile">{blurb}</div>
        </div>
      </div>
    </div>
  );
};
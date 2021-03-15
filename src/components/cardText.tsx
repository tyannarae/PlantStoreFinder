import React, { FunctionComponent } from "react";
import { Stores, Store } from "../database/stores";

export interface cardTextProps {
  store: Store;
}
export const Cardtext: FunctionComponent<cardTextProps> = (cardTextProps) => {
  const {
    bussinessName,
    website,
    address,
    phone,
    igHandle,
    fbHandle,
    blurb,
  } = cardTextProps.store;
  return (
    <div className="card">
      <div className="card-content ">
        <div>{bussinessName}</div>
        <div>{address}</div>
        <div>{website}</div>
      </div>
    </div>
  );
};

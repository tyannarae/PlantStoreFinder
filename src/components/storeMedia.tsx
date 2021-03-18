import React, { FunctionComponent, useState } from "react";
import { Store } from "../database/stores";

export interface StoreMediaDetailsProps {
  store: Store;
}
export const StoreMedia: FunctionComponent<StoreMediaDetailsProps> = (
  StoreMediaDetailsProps
) => {
  const { photos } = StoreMediaDetailsProps.store;
  const [photoIndex, setPhoto] = useState(0);
  //takes the id of the store that was clicked and updates the selectedStore
  //this will be moved to the Store component once that has been created.
  //****move this function to pagination component eventually */
  const setNewPhoto = (index: number) => {
    if (photos[photoIndex + 1]) {
      setPhoto(photoIndex + 1);
    }
  };
  return (
    <div
      onClick={() => {
        setNewPhoto(1);
      }}
    >
      <img
        className="image is-16by9"
        src={photos[photoIndex]}
        alt="firstphoto"
      ></img>
    </div>
  );
};

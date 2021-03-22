import React, { FunctionComponent, useState, useEffect } from "react";
import "./storeMedia.scss";

export interface StoreMediaDetailsProps {
  photos: Array<string>;
}
export const StoreMedia: FunctionComponent<StoreMediaDetailsProps> = (
  StoreMediaDetailsProps
) => {
  const { photos } = StoreMediaDetailsProps;
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
        className="image plantStorePhoto"
        src={photos[photoIndex]}
        alt="../media/placeholder.png"
      ></img>
    </div>
  );
};

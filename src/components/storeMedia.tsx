import React, { FunctionComponent, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./storeMedia.scss";

export interface StoreMediaProps {
  photos: Array<string>;
}
export const StoreMedia: FunctionComponent<StoreMediaProps> = (
  StoreMediaProps
) => {
  const { photos } = StoreMediaProps;
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
      data-testid="imageForward"
      onClick={() => {
        setNewPhoto(1);
      }}
    >
      <LazyLoadImage
        data-testid="lazyLoadImage"
        className="image plantStorePhoto"
        src={photos[photoIndex]}
        alt="../media/placeholder.png"
      />
    </div>
  );
};

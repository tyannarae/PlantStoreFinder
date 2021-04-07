import React, { FunctionComponent, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import fallbackImg from "../media/placeholder.png";
import "./storeMedia.scss";

export interface StoreMediaProps {
  photos: Array<string>;
}
export const StoreMedia: FunctionComponent<StoreMediaProps> = (
  StoreMediaProps
) => {
  const { photos } = StoreMediaProps;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState<string>(photos[0]);

  function addDefaultSrc() {
    setImgUrl(fallbackImg);
  }

  //takes the id of the store that was clicked and updates the selectedStore
  //this will be moved to the Store component once that has been created.
  //****move this function to pagination component eventually */
  const setNewPhotoForward = (index: number) => {
    if (photos[photoIndex + 1]) {
      setPhotoIndex(photoIndex + 1);
      setImgUrl(photos[photoIndex + 1]);
    } else {
      setPhotoIndex(0);
      setImgUrl(photos[photoIndex]);
    }
    console.log("forward:", photoIndex, ":::", imgUrl);
  };
  const setNewPhotoBackward = (index: number) => {
    if (photos[photoIndex - 1]) {
      setPhotoIndex(photoIndex - 1);
      setImgUrl(photos[photoIndex - 1]);
    } else {
      setPhotoIndex(photos.length - 1);
      setImgUrl(photos[photoIndex]);
    }
    console.log("back:  photoIndex:", photoIndex, "::  imgUrl:", imgUrl);
  };
  return (
    <div className="card-content">
      <div className="">
        <div className="">
          <LazyLoadImage
            data-testid="lazyLoadImage"
            className="plantStorePhoto"
            src={imgUrl}
            alt={photos[0]}
            onError={addDefaultSrc}
          />
        </div>
      </div>

      <div className="">
        <div
          data-testid="imageBackward"
          className="pagination-previous backwardArrow"
          onClick={() => {
            setNewPhotoBackward(1);
          }}
        >
          {"<"}
        </div>
        <div
          data-testid="imageForward"
          className="pagination-next forwardArrow"
          onClick={() => {
            setNewPhotoForward(1);
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

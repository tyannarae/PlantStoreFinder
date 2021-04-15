import React, { FunctionComponent, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import fallbackImg from "../media/placeholder.png";
import "./storeMedia.scss";

export interface StoreMediaProps {
  photos: Array<string>;
  id: string;
}
export const StoreMedia: FunctionComponent<StoreMediaProps> = (
  StoreMediaProps
) => {
  const { photos, id } = StoreMediaProps;
  const [totalPhotos] = useState<number>(photos.length - 1);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [imgUrl] = useState<string>(fallbackImg);

  function addDefaultSrc() {
    return fallbackImg;
  }
  //moves forward 1 photo
  const photoForward = () => {
    if (photoIndex < totalPhotos) {
      setPhotoIndex(photoIndex + 1);
    } else {
      //otherwise rotate to beginning of photos
      setPhotoIndex(0);
    }
  };
  //moves backwards 1 photo
  const photoBackward = () => {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    } else {
      //otherwise go to the end of the photos
      setPhotoIndex(totalPhotos);
    }
  };
  return (
    <div className="card-content">
      <div>
        <div>
          <LazyLoadImage
            data-testid="lazyLoadImage"
            className="plantStorePhoto"
            src={photos[photoIndex]}
            alt={imgUrl}
            onError={addDefaultSrc}
          />
        </div>
      </div>

      <div>
        <div
          data-testid="imageBackward"
          className="pagination-previous backwardArrow"
          onClick={() => {
            photoBackward();
          }}
        >
          {"<"}
        </div>
        <div
          data-testid="imageForward"
          className="pagination-next forwardArrow"
          onClick={() => {
            photoForward();
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

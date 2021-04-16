import React, { FunctionComponent, useState, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CityPageContext } from "../context/pages/cityPage";
import fallbackImg from "../media/placeholder.png";
import "./storeMedia.scss";

export interface StoreMediaProps {
  photos: Array<string>;
  id: string;
}
export const StoreMedia: FunctionComponent<StoreMediaProps> = (
  StoreMediaProps
) => {
  const {
    isModalOpen,
    setModalOpen,
    selectedStore,
    setSelectedStore,
    storeIdToIndexMap,
    stores,
  } = useContext(CityPageContext);
  const { photos, id } = StoreMediaProps;
  const [totalPhotos] = useState<number>(photos.length - 1);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [imgUrl] = useState<string>(fallbackImg);

  function addDefaultSrc() {
    return fallbackImg;
  }

  function handleImgClick() {
    setModalOpen(true);
    setSelectedStore(stores[storeIdToIndexMap[id]]);
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
    <div className="card-content" onClick={handleImgClick}>
      <div className="">
        <div className="">
          <LazyLoadImage
            data-testid="lazyLoadImage"
            className="plantStorePhoto"
            src={photos[photoIndex]}
            alt={imgUrl}
            onError={addDefaultSrc}
          />
        </div>
      </div>

      <div className="">
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

import React, { FunctionComponent, useState, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CityPageContext } from "../context/pages/cityPage";
import {
  photoBackward,
  photoForward,
  addDefaultSrc,
} from "../utils/pagination";
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
  const [imgUrl] = useState<string>(addDefaultSrc());

  function handleImgClick() {
    setModalOpen(true);
    setSelectedStore(stores[storeIdToIndexMap[id]]);
  }

  return (
    <div className="card-content">
      <div className="">
        <div onClick={handleImgClick}>
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
            photoBackward(photoIndex, totalPhotos, setPhotoIndex);
          }}
        >
          {"<"}
        </div>
        <div
          data-testid="imageForward"
          className="pagination-next forwardArrow"
          onClick={() => {
            photoForward(photoIndex, totalPhotos, setPhotoIndex);
          }}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

import React, {
  FunctionComponent,
  useState,
  useContext,
  useEffect,
} from "react";
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
    setModalOpen,
    setSelectedStore,
    storeIdToIndexMap,
    stores,
  } = useContext(CityPageContext);
  const [storeId] = useState();
  const { photos, id } = StoreMediaProps;
  const [imgUrl] = React.useState<string>(addDefaultSrc());
  const totalPhotos = photos.length - 1;
  const [photoIndex, setPhotoIndex] = React.useState<number>(0);

  function handleImgClick() {
    setModalOpen(true);
    setSelectedStore(stores[storeIdToIndexMap[id]]);
  }

  return (
    <div className="card-content">
      <div className="">
        <div onClick={handleImgClick} ref={storeId}>
          <LazyLoadImage
            data-testid="lazyLoadImage"
            className="plantStorePhoto"
            src={photos[photoIndex]}
            alt={imgUrl}
            onError={addDefaultSrc}
          />
        </div>
      </div>

      <div className="arrowContainer">
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

import React, { FunctionComponent, useContext, useState } from "react";
import { CityPageContext } from "../context/pages/cityPage";
import {
  photoBackward,
  photoForward,
  addDefaultSrc,
} from "../utils/pagination";
import "./mediaModal.scss";

export interface MediaMediaProps {
  photos: Array<string>;
}
export const MediaModal: FunctionComponent<MediaMediaProps> = (
  MediaMediaProps
) => {
  const { setModalOpen, selectedStore, setSelectedStore } = useContext(
    CityPageContext
  );
  const { photos } = MediaMediaProps;
  const [totalPhotos] = useState<number>(photos.length - 1);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [imgUrl] = useState<string>(addDefaultSrc());
  //   const {stores[selectedStore]} = MediaMediaProps
  function closeModal() {
    setModalOpen(false);
    // setSelectedStore(id);
  }
  return (
    <div className="modal is-active">
      <div className="modal-background">
        <div className="container">
          <button className="exitButton" onClick={closeModal}>
            X
          </button>
          <button
            data-testid="imageBackward button"
            className=" backwardArrowModal modalArrows"
            onClick={() => {
              photoBackward(photoIndex, totalPhotos, setPhotoIndex);
            }}
          >
            {"<"}
          </button>
          <button
            data-testid="imageForward button"
            className=" forwardArrowModal modalArrows"
            onClick={() => {
              photoForward(photoIndex, totalPhotos, setPhotoIndex);
            }}
          >
            {">"}
          </button>
          <img
            data-testid="lazyLoadImage"
            className="plantModalPhoto"
            src={photos[photoIndex]}
            alt={imgUrl}
            onError={addDefaultSrc}
          />
        </div>
      </div>
    </div>
  );
};

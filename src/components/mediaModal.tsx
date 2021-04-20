import React, { FunctionComponent, useContext, useState } from "react";
import { CityPageContext } from "../context/pages/cityPage";
import {
  photoBackward,
  photoForward,
  addDefaultSrc,
} from "../utils/pagination";
import "./mediaModal.scss";

export interface MediaModalProps {
  photos: Array<string>;
}
export const MediaModal: FunctionComponent<MediaModalProps> = (
  MediaModalProps
) => {
  const { setModalOpen, selectedStore, setSelectedStore } = useContext(
    CityPageContext
  );
  const { photos } = MediaModalProps;
  const [totalPhotos] = useState<number>(photos.length - 1);
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [imgUrl, setImgUrl] = useState<string>(photos[photoIndex]);
  //   const {stores[selectedStore]} = MediaModalProps
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}>
        <div className="container">
          <button
            data-testid="imageBackward button"
            className="backwardArrowModal modalArrows button is-outlined"
            onClick={(event) => {
              event.stopPropagation();
              photoBackward(photoIndex, totalPhotos, setPhotoIndex);
              setImgUrl(photos[photoIndex]);
            }}
          >
            {"<"}
          </button>
          <button
            data-testid="imageForward button"
            className="forwardArrowModal modalArrows button is-outlined"
            onClick={(event) => {
              event.stopPropagation();
              photoForward(photoIndex, totalPhotos, setPhotoIndex);
              setImgUrl(photos[photoIndex]);
            }}
          >
            {">"}
          </button>
          <div className="exitAndImgContainer">
            <button
              className="exitButton button is-outlined"
              onClick={closeModal}
            >
              X
            </button>
            <img
              data-testid="lazyLoadImage"
              className="plantModalPhoto"
              src={imgUrl}
              alt={imgUrl}
              onError={addDefaultSrc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

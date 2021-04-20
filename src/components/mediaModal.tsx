import { FunctionComponent, useContext, useState } from "react";
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
  const { setModalOpen } = useContext(CityPageContext);
  const { photos } = MediaModalProps;
  const totalPhotos = photos.length - 1;
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  const [imgUrl, setImgUrl] = useState<string>(photos[photoIndex]);
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}>
        <div className="container">
          <button
            data-testid="modalImgBackward"
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
            data-testid="modalImgForward"
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
              data-testid="exitButton"
              className="exitButton button is-outlined"
              onClick={closeModal}
            >
              X
            </button>
            <img
              data-testid="modalImg"
              className="plantModalPhoto"
              src={photos[photoIndex]}
              alt={imgUrl}
              onError={addDefaultSrc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

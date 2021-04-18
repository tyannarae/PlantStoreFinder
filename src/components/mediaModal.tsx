import React, { FunctionComponent, useContext, useState } from "react";
import { CityPageContext } from "../context/pages/cityPage";
import {
  photoBackward,
  photoForward,
  addDefaultSrc,
} from "../utils/pagination";

export interface MediaMediaProps {
  photos: Array<string>;
}
export const MediaModal: FunctionComponent<MediaMediaProps> = (
  MediaMediaProps
) => {
  const {
    isModalOpen,
    setModalOpen,
    selectedStore,
    setSelectedStore,
  } = useContext(CityPageContext);

  const { photos } = MediaMediaProps;
  const [imgUrl] = useState<string>(addDefaultSrc());
  //   const {stores[selectedStore]} = MediaMediaProps
  function handleImgClick() {
    setModalOpen(false);
    // setSelectedStore(id);
  }
  return (
    <div className="modal is-active ">
      <div className="modal-background" onClick={handleImgClick}>
        <div className="">
          <div onClick={handleImgClick}>
            <img
              data-testid="lazyLoadImage"
              className="plantStorePhoto"
              src={photos[0]}
              alt={imgUrl}
              onError={addDefaultSrc}
            />
          </div>
        </div>
        <div className="modal-card"> Media is open!{selectedStore.id}</div>
      </div>
    </div>
  );
};

import React, { FunctionComponent, useContext } from "react";
import { CityPageContext } from "../context/pages/cityPage";
import { Store } from "../database/stores";

export interface MediaMediaProps {
  stores: Array<Store>;
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
  console.log("selectedStore", selectedStore);
  //   const {stores[selectedStore]} = MediaMediaProps
  function handleImgClick() {
    setModalOpen(false);
    // setSelectedStore(id);
  }
  return (
    <div className="modal is-active ">
      <div className="modal-background" onClick={handleImgClick}>
        <div className="modal-card"> Media is open!{selectedStore.id}</div>
      </div>
    </div>
  );
};

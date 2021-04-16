import React, { FunctionComponent, useContext } from "react";
import { CityPageContext } from "../context/pages/cityPage";

export const MediaModal: FunctionComponent = () => {
  const {
    isModalOpen,
    setModalOpen,
    selectedStore,
    setSelectedStore,
  } = useContext(CityPageContext);
  function handleImgClick() {
    setModalOpen(false);
    // setSelectedStore(id);
  }
  return <div onClick={handleImgClick}>Media is open!</div>;
};

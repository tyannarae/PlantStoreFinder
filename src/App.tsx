import React, { useState, useContext, useEffect, createRef } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import classNames from "classnames";
import { Store } from "./database/stores";
import { MediaModal } from "./components/mediaModal";
import { CityPageContext } from "./context/pages/cityPage";
import { StoreMedia } from "./components/storeMedia";
import { StoreDetails } from "./components/storeDetails";
import Map from "./components/map";
import TopNav from "./components/topNav";
import "./App.scss";

function App() {
  const { storeIdToIndexMap, stores, seletedCity, city } = useContext(
    CityPageContext
  );
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);
  const [storeId, setStoreId] = useState<string>(stores[0].id);
  const [lat, setLat] = useState(selectedStore.lat);
  const [lng, setLng] = useState(selectedStore.lng);

  const parentEl = document.getElementById("storesContainer");
  parentEl?.addEventListener("scroll", function (event) {
    // checking whether fully visible
    for (const [key, value] of Object.entries(storeIdToIndexMap)) {
      const childEl = document.getElementById(`${key}`) as HTMLElement;
      let position = childEl.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        let val = Number(value);
        return setSelectedStore(stores[val]);
      }
    }
  });
  const element = document.getElementById(storeId);

  useEffect(() => {
    element?.scrollIntoView({ behavior: "smooth" });
  }, [element]);

  return (
    <CityPageContext.Provider
      value={{
        city,
        seletedCity,
        selectedStore,
        setSelectedStore,
        isModalOpen,
        setModalOpen,
        stores,
        storeIdToIndexMap,
        storeId,
        setStoreId,
      }}
    >
      <div className="App">
        {isModalOpen ? <MediaModal photos={selectedStore.photos} /> : undefined}
        <div className="navContainer">
          <TopNav city={city} />
        </div>
        <div className="wrapper">
          <div
            className={classNames(
              "mapOutterContainer",
              `${isModalOpen ? "modalIsOpen" : ""}`
            )}
            style={{ width: "50vw" }}
          >
            <Map lng={lng} setLng={setLng} lat={lat} setLat={setLat} />
          </div>
          <div className="storesContainer" id="storesContainer">
            {stores.map((store) => (
              <div className="storeContainer">
                <LazyLoadComponent>
                  <StoreDetails store={store} id={store.id} />
                  <StoreMedia id={store.id} photos={store.photos} />
                </LazyLoadComponent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CityPageContext.Provider>
  );
}

export default App;

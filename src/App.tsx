import React, { useState, useContext, useEffect } from "react";
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
  const [scrolledStoreId, setScrolledStoreId] = useState<string>(stores[0].id);
  const [center, setCenter] = useState<[number, number]>([
    selectedStore.lat,
    selectedStore.lng,
  ]);

  const parentEl = document.getElementById("storesContainer");
  parentEl?.addEventListener("scroll", function (event) {
    // checking whether fully visible
    for (const [key, value] of Object.entries(storeIdToIndexMap)) {
      const childEl = document.getElementById(`${key}`) as HTMLElement;
      let position = childEl.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        let val = Number(value);
        setSelectedStore(stores[val]);
      }
    }
  });

  useEffect(() => {
    const element = document.getElementById(scrolledStoreId);
    element?.scrollIntoView({ behavior: "smooth" });
  }, [scrolledStoreId]);

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
        scrolledStoreId,
        setScrolledStoreId,
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
            <Map center={center} setCenter={setCenter} />
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

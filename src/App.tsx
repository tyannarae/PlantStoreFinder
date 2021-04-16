import React, { useState, useContext } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Store } from "./database/stores";
import { MediaModal } from "./components/mediaModal";
import { CityPageContext } from "./context/pages/cityPage";
import { StoreMedia } from "./components/storeMedia";
import { StoreDetails } from "./components/storeDetails";
import Map from "./components/map";
import "./App.scss";

function App() {
  const { storeIdToIndexMap, stores } = useContext(CityPageContext);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);

  return (
    <CityPageContext.Provider
      value={{
        selectedStore,
        setSelectedStore,
        isModalOpen,
        setModalOpen,
        stores,
        storeIdToIndexMap,
      }}
    >
      <div className="App">
        {isModalOpen ? <MediaModal /> : undefined}
        <div className="mapOutterContainer" style={{ width: "50vw" }}>
          <Map />
        </div>
        <div className="storesContainer">
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
    </CityPageContext.Provider>
  );
}

export default App;

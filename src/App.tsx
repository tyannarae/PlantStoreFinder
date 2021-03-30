import React, { useState, useContext } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Store } from "./database/stores";
import { CityPageContext } from "./context/pages/cityPage";
import { StoreMedia } from "./components/storeMedia";
import { StoreDetails } from "./components/storeDetails";
import Map from "./components/map";
import "./App.scss";

function App() {
  const { storeIdToIndexMap, stores } = useContext(CityPageContext);
  const [isModalOpen, setModalOpen] = useState(false);
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
        <Map />
        {stores.map((store) => (
          <div className="storeContainer">
            <LazyLoadComponent>
              <StoreDetails store={store} key={store.id} />
              <StoreMedia photos={store.photos} />
            </LazyLoadComponent>
          </div>
        ))}
      </div>
    </CityPageContext.Provider>
  );
}

export default App;

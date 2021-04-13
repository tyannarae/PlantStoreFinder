import React, { useState, useContext } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Store } from "./database/stores";
import { CityPageContext } from "./context/pages/cityPage";
import { StoreMedia } from "./components/storeMedia";
import { StoreDetails } from "./components/storeDetails";
import Map from "./components/map";
import TopNav from "./components/topNav";
import "./App.scss";

function App() {
  const { storeIdToIndexMap, stores, selectedCity, city } = useContext(
    CityPageContext
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);
  return (
    <CityPageContext.Provider
      value={{
        city,
        selectedCity,
        selectedStore,
        setSelectedStore,
        isModalOpen,
        setModalOpen,
        stores,
        storeIdToIndexMap,
      }}
    >
      <div className="App">
        <header className="App-header"></header>
        <TopNav city={city} seletedCity={selectedCity} />
        <Map />
        {stores.map((store) => (
          <LazyLoadComponent>
            <StoreMedia photos={store.photos} />
            <StoreDetails store={store} key={store.id} />
          </LazyLoadComponent>
        ))}
      </div>
    </CityPageContext.Provider>
  );
}

export default App;

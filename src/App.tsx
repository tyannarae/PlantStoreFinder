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
  const { storeIdToIndexMap, stores, seletedCity, city } = useContext(
    CityPageContext
  );
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);
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
      }}
    >
      <div className="App">
        <div>
          <div className="navContainer">
            <TopNav city={city} seletedCity={seletedCity} />
          </div>
          <div className="wrapper">
            <div className="mapOutterContainer" style={{ width: "50vw" }}>
              <Map />
            </div>
            <div className="storesContainer ">
              {stores.map((store) => (
                <LazyLoadComponent>
                  <StoreDetails store={store} key={store.id} />
                  <StoreMedia photos={store.photos} />
                </LazyLoadComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CityPageContext.Provider>
  );
}

export default App;

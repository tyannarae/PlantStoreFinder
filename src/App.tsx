import React, { useState, useContext } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Store } from "./database/stores";
import { CityPageContext } from "./context/pages/cityPage";
import { StoreMedia } from "./components/storeMedia";
import { StoreDetails } from "./components/storeDetails";
import { getWeather, weatherObj } from "./database/weatherResults";
import Map from "./components/map";
import TopNav from "./components/topNav";
import "./App.scss";

function App() {
  const { storeIdToIndexMap, stores, selectedCity, city } = useContext(
    CityPageContext
  );
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);
  getWeather();
  if (isLoading) {
    setTimeout(() => setLoading(!isLoading), 300);
  }

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
        <LazyLoadComponent>
          <div className="navContainer">
            <TopNav
              weather={weatherObj}
              city={city}
              seletedCity={selectedCity}
            />
          </div>
        </LazyLoadComponent>
        <div className="wrapper">
          <div className="mapOutterContainer" style={{ width: "50vw" }}>
            <Map />
          </div>
          <div className="storesContainer ">
            {stores.map((store) => (
              <div className="storeContainer">
                <LazyLoadComponent>
                  <StoreDetails store={store} key={store.id} />
                  <StoreMedia photos={store.photos} />
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

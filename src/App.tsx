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
  const [isLoading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
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
      {isLoading ? (
        <div data-testid="loading">loading...</div>
      ) : (
        <div className="App">
          <header className="App-header"></header>
          <LazyLoadComponent>
            <TopNav
              weather={weatherObj}
              city={city}
              seletedCity={selectedCity}
            />
          </LazyLoadComponent>
          <Map />
          {stores.map((store) => (
            <LazyLoadComponent>
              <StoreMedia photos={store.photos} />
              <StoreDetails store={store} key={store.id} />
            </LazyLoadComponent>
          ))}
        </div>
      )}
    </CityPageContext.Provider>
  );
}

export default App;

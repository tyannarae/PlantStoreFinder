import React, { useState, useContext } from "react";
import { Store } from "./database/stores";
import { StoreDetails } from "./components/storeDetails";
import { CityPageContext } from "./context/pages/cityPage";
import Map from "./components/map";
import TopNav from "./components/topNav";
import "./App.scss";

//StoreDetails will be moved to the page level once the page branch is merged into master

function App() {
  const { storeIdToIndexMap, stores, selectedCity } = useContext(
    CityPageContext
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);
  return (
    <CityPageContext.Provider
      value={{
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
        <TopNav seletedCity={selectedCity} />
        <Map />
        {stores.map((store) => (
          <StoreDetails store={store} key={store.id} />
        ))}
      </div>
    </CityPageContext.Provider>
  );
}

export default App;

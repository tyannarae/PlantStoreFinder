import React, { useState, useContext } from "react";
import { Store } from "./database/stores";
import { StoreDetails } from "./components/storeDetails";
import { CityPageContext } from "./context/pages/cityPage";
import Map from "./components/map";
import { StoreMedia } from "./components/storeMedia";
import "./App.scss";

//StoreDetails will be moved to the page level once the page branch is merged into master

function App() {
  const { storeIdToIndexMap, stores } = useContext(CityPageContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);
  console.log(selectedStore);
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
        <header className="App-header">
          <Map />
          {stores.map((store) => (
            <div>
              <StoreMedia store={store} />
              <StoreDetails store={store} key={store.id} />
            </div>
          ))}
        </header>
      </div>
    </CityPageContext.Provider>
  );
}

export default App;

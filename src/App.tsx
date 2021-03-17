import React, { useState } from "react";
import { Store } from "./database/stores";
import { StoreDetails } from "./components/storeDetails";
import { CityPageContext } from "./context/pages/cityPage";
import Map from "./components/map";
import "./App.scss";

//CardText will be to the page level once that is merged into master

function App() {
  const { storeIdToIndexMap, stores } = React.useContext(CityPageContext);
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
        <header className="App-header">
          <Map />
          {stores.map((store, index) => (
            <StoreDetails store={store} key={index} />
          ))}
        </header>
      </div>
    </CityPageContext.Provider>
  );
}

export default App;

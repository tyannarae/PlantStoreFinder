import React, { useState, useContext, lazy } from "react";
import { Store } from "./database/stores";
import { CityPageContext } from "./context/pages/cityPage";
import Map from "./components/map";
import "./App.scss";
//we will want to lazy loading for the entire storeCard once that branch is created.
//Until then we can lazy load storeMedia + store details
const StoreMedia = lazy(() =>
  import("./components/storeMedia").then(({ StoreMedia }) => ({
    default: StoreMedia,
  }))
);
const StoreDetails = lazy(() =>
  import("./components/storeDetails").then(({ StoreDetails }) => ({
    default: StoreDetails,
  }))
);

//StoreDetails will be moved to the page level once the page branch is merged into master

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
        <header className="App-header"></header>
        <Map />
        {stores.map((store) => (
          <React.Suspense fallback={<p>loading</p>}>
            {/* these two components will eventaully be stores inside of storeCard. */}
            <StoreMedia photos={store.photos} />
            <StoreDetails store={store} key={store.id} />
          </React.Suspense>
        ))}
      </div>
    </CityPageContext.Provider>
  );
}

export default App;

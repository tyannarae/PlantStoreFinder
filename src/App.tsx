import React, { useState, useContext, createRef, useEffect } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import classNames from "classnames";
import { Store } from "./database/stores";
import { MediaModal } from "./components/mediaModal";
import { CityPageContext } from "./context/pages/cityPage";
import { StoreMedia } from "./components/storeMedia";
import { StoreDetails } from "./components/storeDetails";
import Map from "./components/map";
import TopNav from "./components/topNav";
import "./App.scss";

function App() {
  // const parentEl = document.getElementById("storesContainer");
  const { storeIdToIndexMap, stores, seletedCity, city } = useContext(
    CityPageContext
  );
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);
  let lat = selectedStore.lat;
  let lng = selectedStore.lng;
  let parentRef = createRef<HTMLDivElement>();
  let number = 0;

  const onScroll = (e: any) => {
    let parent = e.target;
    let childEl = parent.childNodes[number];
    // console.log(childEl);
    // console.log(parent);
    // console.log(e.target.scrollTop);
    let position = childEl.getBoundingClientRect();
    // console.log(position.top);
    //if childEl is scrolled out of view, update number
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      number++;
      childEl = parent.childNodes[number];
      setSelectedStore(stores[number]);
      console.log(`new child ${childEl}${number} store id:${selectedStore.id}`);
    }
  };

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
        {isModalOpen ? <MediaModal photos={selectedStore.photos} /> : undefined}
        <div className="navContainer">
          <TopNav city={city} />
        </div>
        <div className="wrapper">
          <div
            className={classNames(
              "mapOutterContainer",
              `${isModalOpen ? "modalIsOpen" : ""}`
            )}
            style={{ width: "50vw" }}
          >
            <Map lat={lat} lng={lng} />
          </div>
          <div
            className="storesContainer"
            id="storesContainer"
            ref={parentRef}
            onScroll={onScroll}
          >
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
      </div>
    </CityPageContext.Provider>
  );
}

export default App;

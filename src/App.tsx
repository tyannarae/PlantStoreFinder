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
  const onScroll = (e: React.UIEvent<HTMLElement>): void => {
    e.stopPropagation(); // Handy if you want to prevent event bubbling to scrollable parent
    // console.log({
    //   target: e.target, // Note 1* scrollTop is undefined on e.target
    //   totalChildren: e.currentTarget.children.length,
    //   heightOfChild: e.currentTarget.children[0].clientHeight,
    //   containerHeight: e.currentTarget.scrollHeight,
    //   exactChild: e.currentTarget.children[number],
    // });
    for (const [key, value] of Object.entries(storeIdToIndexMap)) {
      const childEl = e.currentTarget.children[value] as HTMLElement;

      let position = childEl.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        let val = Number(value);
        console.log(`store: ${stores[value].id}`);
        return setSelectedStore(stores[value]);
      }
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

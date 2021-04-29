import React, { useState, useContext, createRef } from "react";
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
  let ref = createRef<HTMLDivElement>();

  // const handleScroll = (e: any) => {
  //   const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
  //   const scrollTop = this.myRef.current.scrollTop;
  //   console.log(
  //     `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
  //   );
  //   this.setState({
  //     scrollTop: scrollTop,
  //   });
  //   // let element = e.target;
  //   // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
  //   //   console.log(`element is in view! ${element}`);
  //   // }
  // };
  // // checking whether store being scrolled on is fully in viewport
  // const currentlyViewing = () => {
  //   for (const [key, value] of Object.entries(storeIdToIndexMap)) {
  //     const childEl = document.getElementById(`${key}`) as HTMLElement;
  //     let position = childEl.getBoundingClientRect();
  //     //if store is in viewport update selected store
  //     if (position.top >= 0 && position.bottom <= window.innerHeight) {
  //       let val = Number(value);
  //       setSelectedStore(stores[val]);
  //       return;
  //     }
  //   }
  // };
  // //listen when user scrolls through list of stores
  // useEffect(() => {
  //   parentEl?.addEventListener("scroll", currentlyViewing);
  // });

  const onScroll = () => {
    console.log(`scrolling`);
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const scrollTop = ref.current?.scrollTop;
    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
    );

    // this.setState({
    //   scrollTop: scrollTop,
    // });
    // let element = e.target;
    // if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //   console.log(`element is in view! ${element}`);
    // }
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
            ref={ref}
            onScroll={onScroll}
          >
            {stores.map((store) => (
              <div className="storeContainer">
                <LazyLoadComponent>
                  <StoreDetails
                    store={store}
                    id={store.id}
                    // onScroll={handleScroll}
                  />
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

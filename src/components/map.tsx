import React, {
  useEffect,
  useContext,
  useState,
  FunctionComponent,
  useRef,
} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from "react-leaflet";
import { CityPageContext } from "../context/pages/cityPage";
import "./map.scss";

export interface MapDetailsProps {
  lat: number;
  setLat: Function;
  setLng: Function;
  lng: number;
}

export const Map: FunctionComponent<MapDetailsProps> = (MapDetailsProps) => {
  const { lat, setLat, setLng, lng } = MapDetailsProps;
  const { selectedStore, stores, setStoreId } = useContext(CityPageContext);
  const [zoom] = useState(13);
  const [isNewStore, setNewStore] = useState(false);

  useEffect(() => {
    setLat(selectedStore.lat);
    setLng(selectedStore.lng);
  }, [selectedStore, setLng, setLat]);
  const animateRef = useRef<HTMLDivElement>();
  //
  // console.log(`inside!!! ${e.target.current}`);
  // function SetCenterView() {
  //   console.log(`change view! ${lat} ${lng}`);
  //   const map = useMapEvent("locationfound", (e) => {
  //     console.log(`inside!!! ${lat} ${lng}`);
  //     // map.setView([lat, lng], map.getZoom());
  //   });
  //   setNewStore(false);
  //   return null;
  // }
  const idDetails = (id: string) => {
    setStoreId(id);
    // setNewStore(true);
  };
  // if (isNewStore) {
  //   SetCenterView();
  // }
  // function SetViewOnClick(animateRef: any) {
  //   const map = useMapEvent("click", (e) => {
  //     map.setView([lat, lng], map.getZoom(), {
  //       animate: false,
  //     });
  //   });

  //   return null;
  // }

  function SetViewOnClick() {
    console.log(`here`);
    const parentMap = useMap();
    parentMap.setView([lat, lng], parentMap.getZoom());
    // const map = useMapEvent("update", (e) => {
    //   console.log(`inside map`);
    //   map.setView([lat, lng], map.getZoom());
    //   map.flyTo([lat, lng], map.getZoom());
    // });

    return null;
  }

  return (
    <div data-testid="mapContainer">
      <MapContainer
        id="mapid"
        center={[lat, lng]}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        {/* <SetViewOnClick animateRef={animateRef} /> */}
        <SetViewOnClick />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map((store: any) => (
          <Marker
            position={[store.lat, store.lng]}
            eventHandlers={{
              click: () => {
                idDetails(store.id);
              },
            }}
          >
            <Popup>{store.bussinessName}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

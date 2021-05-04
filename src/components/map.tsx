import React, {
  useEffect,
  useContext,
  useState,
  FunctionComponent,
} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
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

  useEffect(() => {
    setLat(selectedStore.lat);
    setLng(selectedStore.lng);
  }, [selectedStore, setLng, setLat]);

  const idDetails = (id: string) => {
    setStoreId(id);
  };

  function SetViewOnClick() {
    const parentMap = useMap();
    parentMap.setView([lat, lng], parentMap.getZoom());
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

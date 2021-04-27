import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext,
} from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import { CityPageContext } from "../context/pages/cityPage";
import "./map.scss";

export interface MapDetailsProps {
  lat: number;
  lng: number;
  setLat: Function;
  setLng: Function;
}
export const Map: FunctionComponent<MapDetailsProps> = (MapDetailsProps) => {
  const {
    selectedStore,
    setSelectedStore,
    storeIdToIndexMap,
    stores,
    storeId,
    setStoreId,
  } = useContext(CityPageContext);

  const idDetails = (id: string) => {
    setStoreId(id);
  };
  useEffect(() => {
    console.log("lets update the pin location!");
  }, [selectedStore]);
  return (
    <div data-testid="mapContainer">
      <MapContainer
        id="mapid"
        center={[Number(selectedStore.lat), Number(selectedStore.lng)]}
        zoom={13}
        scrollWheelZoom={false}
      >
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

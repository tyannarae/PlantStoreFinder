import React, { FunctionComponent, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { CityPageContext } from "../context/pages/cityPage";
import "./map.scss";

export interface MapDetailsProps {
  lat: number;
  lng: number;
}
export const Map: FunctionComponent<MapDetailsProps> = (MapDetailsProps) => {
  const { stores, setSelectedStore, storeIdToIndexMap } = useContext(
    CityPageContext
  );
  const { lat, lng } = MapDetailsProps;
  const setNewStore = (id: string) => {
    setSelectedStore(stores[storeIdToIndexMap[id]]);
  };
  //log and make sure lat lng is actually updating.

  return (
    <div data-testid="mapContainer">
      <MapContainer
        id="mapid"
        center={[lat, lng]}
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
                setNewStore(store.id);
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

import React, { FunctionComponent, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { setNewStore } from "../utils/selectedStore";
import "./map.scss";

export interface MapDetailsProps {
  stores: any;
}
export const Map: FunctionComponent<MapDetailsProps> = (MapDetailsProps) => {
  const { stores } = MapDetailsProps;
  const { lat, lng } = stores[0];
  const { id } = stores;
  const [selectedStore, setSelectedStore] = useState<string>("");

  return (
    <div data-testid="mapContainer">
      <MapContainer
        id="mapid"
        center={[Number(lat), Number(lng)]}
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
                setNewStore(store.id, setSelectedStore);
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

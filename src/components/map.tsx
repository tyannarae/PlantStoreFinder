import React, { FunctionComponent, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "./map.scss";

export interface MapDetailsProps {
  stores: any;
}
export const Map: FunctionComponent<MapDetailsProps> = (MapDetailsProps) => {
  const { stores } = MapDetailsProps;
  const { lat, lng } = stores[0];
  const { id } = stores;

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
          <Marker position={[store.lat, store.lng]}>
            <Popup>
              {store.bussinessName}
              <div
                onClick={(event) => {
                  console.log(`clicked ${store.id}`);
                }}
              ></div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

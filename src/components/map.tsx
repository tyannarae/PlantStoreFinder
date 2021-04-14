import React, { FunctionComponent } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Stores, CityDeets } from "../database/stores";
import "./map.scss";

export interface MapDetailsProps {
  stores: any;
}
export const Map: FunctionComponent<MapDetailsProps> = (MapDetailsProps) => {
  const { stores } = MapDetailsProps;
  return (
    <div data-testid="mapContainer">
      <MapContainer
        id="mapid"
        center={[30.2672, -97.7431]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map((store: any) => console.log(store))}
        <Marker position={[30.26127, -97.70422]}>
          <Popup>East Austin Succulents</Popup>
        </Marker>
        <Marker position={[30.23477, -97.75765]}>
          <Popup>The Great Outdoor Store</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.scss";

export const Map = () => {
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
        {/* Marker and Popup will also be a seperate components. I want to keep these here for now so I can reference how to create them once everythig is merged.  */}
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

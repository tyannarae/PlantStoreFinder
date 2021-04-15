import React, { FunctionComponent } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
        {stores.map((store: any) => (
          <Marker position={[store.lat, store.lng]}>
            <Popup>{store.bussinessName}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

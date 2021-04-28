import React, { FunctionComponent, useEffect, useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { CityPageContext } from "../context/pages/cityPage";
import "./map.scss";

export interface MapDetailsProps {
  lat: number;
  lng: number;
  setLat: Function;
  setLng: Function;
}
export const Map: FunctionComponent<MapDetailsProps> = (MapDetailsProps) => {
  const { selectedStore, stores, setStoreId } = useContext(CityPageContext);
  const { setLat, setLng, lat, lng } = MapDetailsProps;
  const setId = (id: string) => {
    setStoreId(id);
  };
  useEffect(() => {
    setLat(selectedStore.lat);
    setLng(selectedStore.lng);
  }, [selectedStore, setLat, setLng]);
  console.log(`lat lng ${lat}, ${lng}`);
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
                setId(store.id);
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

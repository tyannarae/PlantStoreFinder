import React, { FunctionComponent, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import "./map.scss";

export interface MapDetailsProps {
  stores: any;
}
export const Map: FunctionComponent<MapDetailsProps> = (MapDetailsProps) => {
  const { stores } = MapDetailsProps;
  const { lat, lng } = stores[0];
  const [storeId, setStoreId] = useState<string>(stores[0].id);
  const [count, setCount] = useState(0);

  const idDetails = (id: string) => {
    setStoreId(id);
  };
  useEffect(() => {
    console.log(`Map new selected store is: ${storeId}`);
  }, [storeId]);

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
                idDetails(store.id);
                setCount(count + 1);
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

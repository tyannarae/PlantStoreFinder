import React, { FunctionComponent, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "./map.scss";

export interface PopupProps {
  store: any;
}
export const Popupp: FunctionComponent<PopupProps> = (PopupProps) => {
  const { store } = PopupProps;
  const [storeId, setStoreId] = useState<string>(store.id);
  const setNewId = (id: string) => {
    console.log("popup", id);
    return setStoreId(id);
  };

  return (
    <Marker
      position={[store.lat, store.lng]}
      eventHandlers={{
        click: () => {
          return setNewId(store.id);
        },
      }}
    >
      <Popup>{store.bussinessName}</Popup>
    </Marker>
  );
};

import React, { useContext, FunctionComponent } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { CityPageContext } from "../context/pages/cityPage";
import "./map.scss";

export interface MapDetailsProps {
  center: [number, number];
}

export const Map: FunctionComponent<MapDetailsProps> = (MapDetailsProps) => {
  const { center } = MapDetailsProps;
  const { stores, setScrolledStoreId } = useContext(CityPageContext);
  const zoom = 13;

  //this is required in order to update MapContainer center
  function SetViewOnScroll() {
    const parentMap = useMap();
    parentMap.setView(center, parentMap.getZoom());
    return null;
  }

  return (
    <div data-testid="mapContainer">
      <MapContainer
        id="mapid"
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <SetViewOnScroll />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {stores.map((store: any) => (
          <Marker
            position={[store.lat, store.lng]}
            eventHandlers={{
              click: () => {
                setScrolledStoreId(store.id);
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

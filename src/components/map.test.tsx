import React from "react";
import { render, screen } from "@testing-library/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Map } from "./map";

describe("Map", () => {
  it("Renders with MapContainer", () => {
    render(<Map />);
    expect(screen.getByTestId("mapContainer")).toBeDefined();
  });
});

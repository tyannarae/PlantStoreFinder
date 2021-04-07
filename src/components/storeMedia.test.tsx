import React from "react";
import { getByTestId, render, screen, fireEvent } from "@testing-library/react";
import { StoreMedia } from "./storeMedia";

describe("StoreMedia", () => {
  const fakeStore = {
    id: "eas1",
    city: "Austin",
    state: "Texas",
    lat: 30.26127,
    lng: -97.70422,
    bussinessName: "East Austin Succulents",
    website: "https://eastaustinsucculents.com/",
    address: "801 Tillery St, Austin, Texas 78702",
    phone: "(512)701-3448",
    igHandle: "https://www.instagram.com/eastaustinsucculents/",
    fbHandle: "https://www.facebook.com/east.austinsucculents",
    blurb:
      "East Austin Succulents is Austin's most diverse & creative Cactus & Succulent Nursery",
    photos: [
      "https://www.mollyonthemoveblog.com/wp-content/uploads/2016/05/east-austin-succulents.jpg",
      "https://www.atasteofkoko.com/wp-content/uploads/2017/04/East-Austin-Succulents-FB-Cover.jpg",
      "https://rootedinmoss.files.wordpress.com/2015/11/img_2245.jpg",
    ],
  };
  const photos = fakeStore.photos;
  it("Renders with the first photo in the array visible", () => {
    render(<StoreMedia photos={photos} />);
    expect(screen.getByTestId("lazyLoadImage").src).toEqual(photos[0]);
  });
  it("onClick event fires and updates to the next photo", () => {
    render(<StoreMedia photos={photos} />);
    fireEvent.click(screen.getByTestId("imageForward"));
    expect(screen.getByTestId("lazyLoadImage").src).toEqual(photos[1]);
  });
  it("onClick event fires and updates to the previous photo", () => {
    render(<StoreMedia photos={photos} />);
    fireEvent.click(screen.getByTestId("imageBackward"));
    expect(screen.getByTestId("lazyLoadImage").src).toEqual(photos[2]);
  });
});

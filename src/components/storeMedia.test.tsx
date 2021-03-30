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
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/145499779_2747114298833410_4804550472908776278_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=m8GKm03jtM8AX9BoqT8&_nc_ht=scontent-dfw5-2.xx&oh=d035251d68c89d247ed4a24064897527&oe=606D4915",
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/132018400_2717071651837675_1105403803744973353_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a26aad&_nc_ohc=cC970Oqm4UMAX886NpF&_nc_ht=scontent-dfw5-2.xx&oh=e97c74040dac84243723c2350fe3a228&oe=606B8735",
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
    expect(screen.getByTestId("lazyLoadImage").src).toEqual(photos[0]);
  });
});
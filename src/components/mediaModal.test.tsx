import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CityPageContext, mapStoreIdsToIndex } from "../context/pages/cityPage";
import { MediaModal } from "./mediaModal";

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
  const fakeData = [
    {
      city: "Austin",
      state: "Texas",
      mapCoordinates: {
        lat: 30.2672,
        lng: -97.7431,
      },
      stores: [fakeStore],
    },
  ];
  const photos = fakeStore.photos;
  it("Renders with the first photo in the array visible", () => {
    render(<MediaModal photos={photos} />);
    expect(screen.getByTestId("modalImg").src).toEqual(photos[0]);
  });
  it("onClick event fires and updates to the previous photo", () => {
    render(<MediaModal photos={photos} />);
    fireEvent.click(screen.getByTestId("modalImgBackward"));
    expect(screen.getByTestId("modalImg").src).toEqual(photos[2]);
  });
  it("onClick event fires and updates to the next photo", () => {
    render(<MediaModal photos={photos} />);
    fireEvent.click(screen.getByTestId("modalImgForward"));
    expect(screen.getByTestId("modalImg").src).toEqual(photos[1]);
  });
  it("renders with backward button", () => {
    render(<MediaModal photos={photos} />);
    expect(screen.getByText("<")).toBeDefined();
  });
  it("renders with forward button", () => {
    render(<MediaModal photos={photos} />);
    expect(screen.getByText(">")).toBeDefined();
  });
  it("renders with exit button and closes modal onClick", () => {
    const contextValue = {
      city: fakeData[0],
      isModalOpen: true,
      seletedCity: fakeData[0].mapCoordinates,
      selectedStore: fakeStore,
      setSelectedStore: jest.fn(),
      stores: fakeData[0].stores,
      setModalOpen: jest.fn(),
      storeIdToIndexMap: mapStoreIdsToIndex(fakeData[0].stores),
    };
    render(
      <CityPageContext.Provider value={contextValue}>
        <MediaModal photos={photos} />
      </CityPageContext.Provider>
    );
    expect(screen.getByText("X")).toBeDefined();
    fireEvent.click(screen.getByTestId("exitButton"));
    expect(contextValue.setModalOpen).toHaveBeenCalledWith(false);
  });
});

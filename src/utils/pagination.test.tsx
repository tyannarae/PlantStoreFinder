import { photoForward, photoBackward } from "./pagination";

describe("Pagination utility functions", () => {
  it("moves forward to index 1", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 0;
    const totalPhotos = 5;
    photoForward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(1);
  });
  it("moves forward to index 0", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 5;
    const totalPhotos = 5;
    photoForward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(0);
  });
  it("moves backward to index 0", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 1;
    const totalPhotos = 5;
    photoBackward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(0);
  });
  it("moves backward to index 5", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 0;
    const totalPhotos = 5;
    photoBackward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(5);
  });
});

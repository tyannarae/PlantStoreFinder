import { photoForward, photoBackward } from "./pagination";

describe("Pagination utility functions", () => {
  it("moves forward to index 1", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 0;
    const totalPhotos = 5;
    photoForward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(1);
  });
  it("moves forward to index 2", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 1;
    const totalPhotos = 5;
    photoForward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(2);
  });
  it("moves forward to index 3", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 2;
    const totalPhotos = 5;
    photoForward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(3);
  });
  it("moves forward to index 4", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 3;
    const totalPhotos = 5;
    photoForward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(4);
  });
  it("moves forward to index 5", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 4;
    const totalPhotos = 5;
    photoForward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(5);
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
  it("moves backward to index 4", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 5;
    const totalPhotos = 5;
    photoBackward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(4);
  });
  it("moves backward to index 3", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 4;
    const totalPhotos = 5;
    photoBackward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(3);
  });
  it("moves backward to index 2", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 3;
    const totalPhotos = 5;
    photoBackward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(2);
  });
  it("moves backward to index 1", () => {
    const setPhotoIndex = jest.fn();
    let photoIndex = 2;
    const totalPhotos = 5;
    photoBackward(photoIndex, totalPhotos, setPhotoIndex);
    expect(setPhotoIndex).toBeCalledWith(1);
  });
});

import fallbackImg from "../media/placeholder.png";

//moves forward 1 photo
export const photoForward = (
  photoIndex: number,
  totalPhotos: number,
  setPhotoIndex: Function
) => {
  if (photoIndex < totalPhotos) {
    return setPhotoIndex(photoIndex + 1);
  }
  //otherwise rotate to beginning of photos
  return setPhotoIndex(0);
};
//moves backwards 1 photo
export const photoBackward = (
  photoIndex: number,
  totalPhotos: number,
  setPhotoIndex: Function
) => {
  if (photoIndex > 0) {
    return setPhotoIndex(photoIndex - 1);
  }
  //otherwise go to the end of the photos
  return setPhotoIndex(totalPhotos);
};

//add a default img src
export function addDefaultSrc() {
  return fallbackImg;
}

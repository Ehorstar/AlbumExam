import axios from "axios";

export const getAlbumPhotos = async ({ params }) => {
  const { albumId } = params;

  const photos = await axios.get(
    `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
  );

  const album = await axios.get(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );

  return {
    photos: photos.data,
    albumTitle: album.data.title,
  };
};

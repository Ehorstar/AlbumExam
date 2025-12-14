import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Album from "./pages/Album";
import { getAlbums } from "./loaders/AlbumLoader";
import Home from "./pages/Home";
import { getAlbumPhotos } from "./loaders/PhotoLoader";
import AlbumPhotos from "./pages/AlbumPhotos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/albums",
        element: <Album />,
        loader: getAlbums,
      },
      {
        path: "albums/:albumId",
        element: <AlbumPhotos />,
        loader: getAlbumPhotos,
      },
    ],
  },
]);

export default router;

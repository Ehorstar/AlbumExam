import { useLoaderData, useNavigate } from "react-router-dom";

const Album = () => {
  const albums = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="album">
      <h1 className="title">Albums</h1>

      {albums.map((album) => (
        <div
          key={album.id}
          className="album-item"
          onClick={() => navigate(`/albums/${album.id}`)}
          style={{ cursor: "pointer" }}
        >
          {album.title}
        </div>
      ))}
    </div>
  );
};

export default Album;

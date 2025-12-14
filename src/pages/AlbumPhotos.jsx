import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AlbumPhotos = () => {
  const { photos, albumTitle } = useLoaderData();
  const [show, setShow] = useState(null);

  const showTitle = (index) => {
    setShow(show === index ? null : index);
  };

  return (
    <div className="photos">
      <h1>Album: {albumTitle}</h1>

      <div className="photos-grid">
        {photos.map((photo, index) => (
          <div key={photo.id} className="photo-item">

            <img src="https://picsum.photos/150" alt={photo.title} />

            <button onClick={() => showTitle(index)}>Show</button>

            {show === index && photo.title}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotos;

import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setPhotos(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  // posts.map((post) => console.log(post.title));

  return (
    <div>
      <h1>Async Dummy Posts</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <strong>{photo.title}</strong>
              <p>{photo.url}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;

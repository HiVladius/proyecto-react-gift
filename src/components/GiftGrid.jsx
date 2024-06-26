import { useFechtGifs } from "../hooks/useFechtGifs";

import GifItem from "./GifItem";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFechtGifs(category);
  

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <p>Loading...</p>
      }

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}

export default GiftGrid;

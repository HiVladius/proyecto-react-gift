import { useState, useEffect } from "react";
import { getGift, getGiftRandom } from "../helpers/getGifts";

export const useFechtGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGift(category);
    setImages(newImages);
    setIsLoading(false);
  };

 

  useEffect(() => {
    getImages();
  }, []);


  return {
    images: images,
    isLoading: isLoading,
  };
};

// export const useFechtGifsRandom = () => {
//   const [image, setImage] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const getImage = async () => {
//     const newImage = await getGiftRandom();
//     setImage(newImage);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     getImage();
//   }, []);

//   return {
//     image: image,
//     isLoading: isLoading,
//   };
// }
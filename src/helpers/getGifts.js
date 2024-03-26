
export const getGift = async (category) => {
  
  const limit = 20;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=vv0mvkAQ6JdKr84ZAok01yjtE6yLoBTN&q=${category}&limit=${limit}`;

 
  const resp = await fetch(url);


  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs;
  };


  // export const getGiftRandom = async()=>{
    
  //   const limit2 = 10;
  //   const url = `https://api.giphy.com/v1/gifs/trending?api_key=${VITE_GIFT_KEY}&limit=${limit2}`;
  
  //   const resp = await fetch(url);
  //   const { data } = await resp.json();

  //   const gif = data.map((img) => ({
  //     id: img.id,
  //     title: img.title,
  //     url: img.images.downsized_medium.url,
  //   }));
    
  //   return gif;
  // }
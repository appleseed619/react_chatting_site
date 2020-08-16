import React, { useState, useEffect } from "react";
import Axios from "axios";
import ImageCard from "./ImageBox";
import ImageSearch from "./ImageSearch";
const API_KEY = "17925693-c924acaf6b6f38b6d7fc56edd";

const PhotoGallary = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const URI = `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`;
    setIsLoading(true);
    Axios(URI)
      .then((res) => res.data)
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error("error: ", err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={ text => setTerm(text)}/>
      {
        !isLoading && images.length === 0 &&  (
          <h1 className="text-6xl text-center mx-auto mt-32">{`No images found`}</h1>
        )
      }
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallary;

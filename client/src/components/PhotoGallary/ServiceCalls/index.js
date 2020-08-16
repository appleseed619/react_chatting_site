import Axios from "axios";

export const fetchImages = async (term) => {
  const URI = `https://pixabay.com/api/?key=${process.env.API_KEY}&q=${term}&image_type=photo&pretty=true`;

  return await Axios.get(URI)
    .then((res) => res.json())
    .catch((err) => console.error("error: ", err));
};

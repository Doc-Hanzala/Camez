import { useGlobalContext } from "../Context";

import axios from "axios";
import { useQuery } from "react-query";

 
const URL =
  "https://api.unsplash.com/search/photos?client_id=LHa2Jg8NF3Ndphi-4vPABsx0YxpbrCETWArdYudy830&query=";

const Gallery = () => {
 const { search } = useGlobalContext();

  const { isLoading, data, error } = useQuery({
    queryKey: ["key",search],
    queryFn: async () => {
      const result = await axios.get(`${URL}${search}`);
      return result;
    },
  });

  const photos = data?.data?.results;

  if (isLoading) {
    return (
      <h1 style={{ marginTop: "5rem", textAlign: "center" }}>Loading......</h1>
    );
  }

  if (error || photos.length === 0) {
    return (
      <h1 style={{ marginTop: "5rem", textAlign: "center" }}>
        there is an error
      </h1>
    );
  }

  if (photos.length > 1) {
    return (
      <section className="gallery">
        {photos.map((item) => {
          const url = item?.urls?.regular;
          return <img className="img" key={item.id} src={url} alt="photos" />;
        })}
      </section>
    );
  }
};

export default Gallery;

import axios from "axios";
import { useQuery } from "react-query";

const URL =
  "https://api.unsplash.com/search/photos?client_id=LHa2Jg8NF3Ndphi-4vPABsx0YxpbrCETWArdYudy830&query=mountains";

const Gallery = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["key"],
    queryFn: async () => {
      const result = await axios.get(URL);
      return result;
    },
  });

  console.log(data?.data?.results);



  if (isLoading) {
    return <h1 style={{ marginTop: "5rem" }}>Loading......</h1>;
  }

  if (error) {
    return <h1 style={{ marginTop: "5rem" }}>{error.message}</h1>;
  }
  const photos = data?.data?.results;


  if (photos) {
    return (
      <section className="gallery">
        {photos.map((item) => {
          const url = item?.urls?.regular
          return <img className="img" key={item.id} src={url} alt="photos" />;
        })}
      </section>
    );
  }
};

export default Gallery;

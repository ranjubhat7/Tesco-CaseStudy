import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import axios from "axios";

const Banner = () => {
  const [carouseldata, setCarouselData] = useState(null);
  useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:4040/banners");
      await setCarouselData(response.data);
    };
    data();
  }, []);
  return (
    <div className="bannerContainer">
      <Carousel showArrows showThumbs={false} infiniteLoop dynamicHeight>
        {carouseldata &&
          carouseldata.map((item) => (
            <div key={item.id}>
              <img src={item.bannerImageUrl} alt={item.bannerImageAlt} loading={"lazy"} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Banner;

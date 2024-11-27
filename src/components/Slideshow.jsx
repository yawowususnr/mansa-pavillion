import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [1, 2, 3, 4];

  return (
    <div className="p-5 bg-[#F1E4C1] flex justify-center">
      <div className="max-w-4xl m-20">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={"https://i.postimg.cc/KY2PMSG6/1.jpg"}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;

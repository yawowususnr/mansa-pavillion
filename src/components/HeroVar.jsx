import React from "react";
import { Link } from "react-router-dom";
import hero2 from "../assets/hero-2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroVar = () => {
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

  const images = [
    {
      link: "https://i.postimg.cc/7L1Yr4DZ/inside-1.jpg",
      description: "Indoor Event",
    },
    {
      link: "https://i.postimg.cc/vBYy4cnT/3.jpg",
      description: "Outdoor Space",
    },
    {
      link: "https://i.postimg.cc/KY2PMSG6/1.jpg",
      description: "Outdoor Space 2",
    },
    {
      link: "https://i.postimg.cc/VNzPMCQz/inside-4.jpg",
      description: "Indoor Lights",
    },
    {
      link: "https://i.postimg.cc/2jbq02Sc/300-capacity.jpg",
      description: "300 Person Seating Capacity",
    },
    {
      link: "https://i.postimg.cc/sX0hvLDS/ample-parking.jpg",
      description: "Ample Parking Space",
    },
  ];

  return (
    <div className="flex">
      <div className="w-2/5 flex flex-col items-center justify-center bg-[#FFF8ED]">
        <div className="">
          <h1 className="text-6xl lg:text-[3rem] text-center uppercase mb-4 font-light font- tracking-widest">
            Mansa Pavilion
          </h1>
        </div>

        <div className="border-b-2 w-1/6 border-black pt-4"></div>

        <p className="lg:mt-6 text-xl mb-6 font-medium tracking-wide">
          Come to the perfect venue for all your needs
        </p>
        <Link to={"/request"}>
          <button className="bg-[#D8BA67] text-white px-6 py-4 rounded-md font-normal text-lg hover:bg-[#c4a857] transition duration-300">
            BOOK NOW
          </button>
        </Link>
      </div>

      <div className="w-3/5 flex flex-col">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src.link}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
              {/* <h1 className="text-center">{src.description}</h1> */}
            </div>
          ))}
        </Slider>

        {/* <img className="w-full h-auto" src={hero2} alt="" /> */}
      </div>
    </div>
  );
};

export default HeroVar;

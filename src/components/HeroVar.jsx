import React from "react";
import { Link } from "react-router-dom";
import hero2 from "../assets/hero-2.jpg";

const HeroVar = () => {
  return (
    <div className="flex">
      <div className="w-2/5">
        <div className="w-2/5">
          <h1 className="text-5xl lg:text-[6rem] uppercase mb-4 font-['Italiana'] font-light font- tracking-widest">
            Mansa Pavilion
          </h1>
        </div>

        <div className="border-b-2 w-1/6 border-black pt-4"></div>

        <p className="lg:mt-6 text-lg mb-6 font-medium tracking-tighter">
          Come to the perfect venue for all your needss
        </p>
        <Link to={"/request"}>
          <button className="bg-[#D8BA67] text-white px-6 py-4 rounded-md font-normal text-lg hover:bg-[#c4a857] transition duration-300">
            BOOK NOW
          </button>
        </Link>
      </div>
      <div className="w-3/5 flex flex-col">
        <img className="w-full h-auto" src={hero2} alt="" />
      </div>
    </div>
  );
};

export default HeroVar;

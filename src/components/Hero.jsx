import heroImage from "../assets/pavalion-sign.jpg";

const Hero = () => {
  return (
    <div className="relative bg-[#F1E4C1] h-screen">
      {/* Background image with transparency */}
      <img
        src={heroImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.1 }}
      />
      {/* Centered Content */}
      <div className="relative flex flex-col items-center justify-center h-full z-10 text-center">
        <div className="w-2/5">
          <h1 className="text-5xl lg:text-[6rem] uppercase mb-4 font-['Italiana'] font-light font- tracking-widest">
            Mansa Pavilion
          </h1>
        </div>

        <div className="border-b-2 w-1/6 border-black"></div>

        <p className="lg:mt-6 text-lg mb-6 font-medium tracking-tighter">
          Come The perfect venue for all your needs
        </p>
        <button className="bg-[#D8BA67] text-white px-6 py-4 rounded-md font-medium text-lg hover:bg-[#c4a857] transition duration-300">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col items-center my-20">
        <h1 className="text-5xl text-center lg:text-[6rem] p-2 uppercase font-bold">
          Mansa Pavalion
        </h1>
        <p className="lg:mt-6 text-lg mb-4 font-medium tracking-tighter">
          The perfect venue for all your needs
        </p>

        <img
          src="https://www.co.jackson.mi.us/ImageRepository/Document?documentID=12066"
          alt=""
          className="hidden md:block w-full h-[65vh] object-cover rounded-2xl p-2"
        />
      </div>
    </section>
  );
};

export default Hero;

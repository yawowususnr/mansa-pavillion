const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2">
            <div className="flex flex-col items-center my-20">
                <h1 className="text-6xl text-center lg:text-[10rem] p-2 uppercase font-bold">
                    Mansa Pavallion
                </h1>
                <p className="lg:mt-6 text-lg mb-4 font-medium tracking-tighter">
                    The perfect venue for all your needs
                </p>
            
                <img src="https://curran-architecture.com/_main_site/wp-content/uploads/2023/10/Prairie-Waters-2.jpg" alt="" className="hidden md:block w-full h-[65vh] object-cover rounded-2xl p-2" />
            </div>
        </section>
    )
}

export default Hero
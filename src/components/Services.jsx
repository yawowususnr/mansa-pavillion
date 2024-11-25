const Services = () => {
  const eventCenterServices = [
    {
      name: "Weddings",
      description:
        "Comprehensive wedding planning services, including venue decoration, catering coordination, and event scheduling.",
      link: "https://www.marthastewart.com/thmb/JIcBgX8cf75njo8L9k6cdMZuuok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shayla-lester-wedding-ceremony-couple-vow-exchange-0621-87d46ed432dc4213bb0f3f501f5f77b7.jpg",
    },
    {
      name: "Corporate Events",
      description:
        "Professional setup for corporate meetings, conferences, and seminars with state-of-the-art facilities.",
      link: "https://palacesocial.com/wp-content/uploads/Corporate-Events-Venue-Buffet-Palace-Social-Houston.jpg",
    },
    {
      name: "Birthday Parties",
      description:
        "Fun and customizable birthday party packages for all ages, featuring decorations, entertainment, and catering.",
      link: "https://static.wixstatic.com/media/c8b394_6e676c6395764008a971d8a18160f0f6~mv2.jpg/v1/fill/w_1000,h_598,al_c,q_85,usm_0.66_1.00_0.01/c8b394_6e676c6395764008a971d8a18160f0f6~mv2.jpg",
    },
    {
      name: "Workshops and Seminars",
      description:
        "Equipped spaces and support services for educational workshops, training sessions, and seminars.",
      link: "https://www.marthastewart.com/thmb/JIcBgX8cf75njo8L9k6cdMZuuok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shayla-lester-wedding-ceremony-couple-vow-exchange-0621-87d46ed432dc4213bb0f3f501f5f77b7.jpg",
    },
    {
      name: "Concerts and Live Shows",
      description:
        "Spacious venues with advanced sound and lighting systems for concerts and live performances.",
      link: "https://www.marthastewart.com/thmb/JIcBgX8cf75njo8L9k6cdMZuuok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shayla-lester-wedding-ceremony-couple-vow-exchange-0621-87d46ed432dc4213bb0f3f501f5f77b7.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto border-b-2" id="services">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-20">
          Perfect for events like
        </h2>
        {eventCenterServices.map((service, index) => (
          <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
            <div
              className={`lg:w-1/2 mb-4 lg:mb-0 ${
                index % 2 === 0 ? "" : "lg:order-2"
              }`}
            >
              <img
                src={service.link}
                className="w-full h-full object-cover rounded-lg"
                // className="w-96 h-96 overflow-hidden relative"
                alt=""
              />
            </div>
            <div
              className={`lg:w-1/2 flex flex-col ${
                index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"
              }`}
            >
              <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {service.name}
              </h3>
              <p className="mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

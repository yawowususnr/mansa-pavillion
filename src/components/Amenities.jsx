import React from "react";

export const Amenities = () => {
  const amenities = [
    {
      name: "Over 300 Guest Capacity",
      description: "So you and your guests can enjoy",
    },
    {
      name: "Over 300 Guest Capacity",
      description: "So you and your guests can enjoy",
    },
    {
      name: "Over 300 Guest Capacity",
      description: "So you and your guests can enjoy",
    },
    {
      name: "Over 300 Guest Capacity",
      description: "So you and your guests can enjoy",
    },
  ];

  return (
    <div className="bg-[#FFF8ED] py-28 px-5">
      <div className="flex justify-evenly items-center gap-3">
        <div>
        <h2 className="text-5xl font-bold mb-2">Amenities</h2>
        <p className="text-lg text-slate-600">Here to make your life as easy as possible</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={` py-16 px-7 ${
                index === 2 || index == 1
                  ? "bg-[#D8BA67] text-white"
                  : "bg-transparent border border-1 border-[#D8BA67]"
              } rounded-md text-black shadow-md`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                version="1.1"
                id="Capa_1"
                width="24px"
                height="24px"
                viewBox="0 0 31.354 31.354"
                xml:space="preserve"
              >
                <g>
                  <path d="M29.605,18.478l-0.882-7.591h-1.692l-0.078-0.9h3.205v-2.44H26.74l-0.365-4.174H4.98L4.615,7.546H1.226v2.44h3.176   l-0.079,0.9H2.631L1.75,18.478H0v4.916h2.536v4.588h5.071v-4.588h16.139v4.588h5.072v-4.588h2.535v-4.916H29.605z M6.864,5.427   H24.49l0.479,5.459H6.385L6.864,5.427z M6,17.173c-1.028,0-1.862-0.833-1.862-1.862c0-1.028,0.834-1.862,1.862-1.862   c1.029,0,1.862,0.834,1.862,1.862C7.862,16.339,7.029,17.173,6,17.173z M20.92,21.724H10.434v-7.42h10.485L20.92,21.724   L20.92,21.724z M25.354,17.173c-1.029,0-1.861-0.833-1.861-1.862c0-1.028,0.832-1.862,1.861-1.862c1.028,0,1.862,0.834,1.862,1.862   C27.216,16.339,26.383,17.173,25.354,17.173z" />
                </g>
              </svg>
              <h3 className="font-bold text-lg">{amenity.name}</h3>
              <p className="text-sm mt-2">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import bg from "../assets/bg.png";
import Item1 from "../assets/Item1.jpg";

const Hero = ({ foodItems }) => {
  return (
    <div>
      <div className="relative h-[82.2vh] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover overflow-hidden  "
          src={bg}
          alt="bg-image"
        />
        <div className="absolute  top-4 text-white flex  justify-around p-18 text-2xl ">
          <div className="flex flex-wrap gap-4  ">
            {foodItems.map((item, index) => (
              <div
                key={index}
                className="  border flex  justify-around p-4 h-40 gap-6 "
              >
                <div>
                  <img
                    className="h-28 w-26   rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="  flex justify-end flex-wrap w-[200px] gap-2">
                  <div>
                    <h1>{item.name}</h1>
                    <p className="text-sm">{item.text}</p>
                  </div>
                  <div>
                    <span className="border px-1">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

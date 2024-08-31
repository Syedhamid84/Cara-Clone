import React from "react";
import Image from "next/image";
import { AboutImages } from "@/app/data";

const About = () => {
  return (
    <div id="about" className="flex justify-center items-center md:justify-between px-5 md:px-12 py-6 w-full flex-wrap gap-4 mt-4">
      {AboutImages.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-2 md:gap-4 border border-black rounded-md p-2 md:p-3"
          >
            {/* <div className="w-32"> */}

            <Image src={item.img} alt="" className="w-20 md:w-32" />
            {/* </div> */}
            <button
              className="text-[#187c72] font-semibold text-sm rounded-md text-center w-28 p-1"
              style={{ backgroundColor: item.color }}
            >
              {item.button}
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default About;

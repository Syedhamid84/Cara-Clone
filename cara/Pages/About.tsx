import React from "react";
import Image from "next/image";
import { AboutImages } from "@/app/data";

export const About = () => {
  return (
    <div className="flex justify-between px-12 mt-52 py-6 w-full flex-wrap">
      {AboutImages.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-4 border border-black rounded-md p-3"
          >
            <Image src={item.img} alt="" />
            <p className="bg-[#5fafca] text-[#187c72] font-semibold text-base rounded-md text-center">
              {item.button}
            </p>
          </div>
        );
      })}
    </div>
  );
};

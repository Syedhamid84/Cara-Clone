import { ArrivalData } from "@/app/data";
import Image from "next/image";
import React from "react";

export const Arrival = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center font-bold text-5xl text-[#374151]">
        New Arrival
      </h1>
      <p className="text-center text-lg mt-2">
        Summer Collection New Modern Design
      </p>

      <div className="flex mt-12 justify-center w-full flex-wrap gap-6 ">
        {ArrivalData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-1 rounded-md border border-[#d1d5db] bg-white p-4"
            >
              <Image
                src={item.img}
                alt="image"
                className="rounded-md border border-[#d1d5db]"
                height={250}
                width={250}
              />
              <span className="text-[#9ca3af]">{item.brandname}</span>
              <span className="text-[#374151] text-lg font-bold hover:text-[#187c72]">
                {item.description}
              </span>
              <span className="text-[#187c72] font-semibold">{item.price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import { CollectionDualData } from "@/app/data";
import { CollectionTrippleData } from "@/app/data";

import Image from "next/image";
import React from "react";

export const Collection = () => {
  return (
    <div className="mt-12 py-8 px-12">
      <div className="flex gap-6 ">
        {CollectionDualData.map((item, index) => {
          return (
            <div key={index} className="relative">
              <Image
                src={item.img}
                alt=""
                height={620}
                width={620}
                style={{
                  objectFit: "cover",
                  zIndex: -1,
                  // marginTop: 73,
                }}
              />
              <div className="flex flex-col gap-3 absolute top-24 left-8 group">
                <span className="text-xl text-[#ffffff] font-medium ">
                  {item.title}
                </span>
                <span className="text-xl text-[#ffffff] font-extrabold">
                  {item.offer}
                </span>
                <span className="text-base text-[#ffffff] font-thin">
                  {item.description}
                </span>
                <button className="w-28 py-1 px-2 text-base text-[#ffffff] border-2 border-[#ffffff] group-hover:bg-[#187c72] group-hover:border-none">
                  {item.button}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex gap-6 ">
        {CollectionTrippleData.map((item, index) => {
          return (
            <div key={index} className="relative">
              <Image
                src={item.img}
                alt=""
                width={580}
                height={580}
                className="object-cover h-[100%] "
              />
              <div className="flex flex-col gap-3 absolute top-24 left-8">
                <span className="text-xl text-[#ffffff] font-medium ">
                  {item.title}
                </span>
                <span className="text-base text-[#ffffff] font-thin">
                  {item.description}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

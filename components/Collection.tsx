import { CollectionDualData } from "@/app/data";
import { CollectionTrippleData } from "@/app/data";

import Image from "next/image";
import React from "react";

const Collection = () => {
  return (
    <div id="blog" className="mt-12 py-8 px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {CollectionDualData.map((item, index) => {
          return (
            <div key={index} className="relative ">
              <Image
                src={item.img}
                alt=""
                height={620}
                width={620}
                className="h-full w-full"
                style={{
                  objectFit: "cover",
                  zIndex: -1,
                }}
              />
              <div className="flex flex-col gap-3 absolute top-1/2 left-0 md:left-5 -translate-x-0 -translate-y-1/2 group pl-4">
                <span className="text-sm md:text-lg lg:text-xl text-[#ffffff] font-light md:font-normal lg:font-medium">
                  {item.title}
                </span>
                <span className="text-sm md:text-2xl lg:text-4xl text-[#ffffff] font-bold">
                  {item.offer}
                </span>
                <span className="text-xs md:text-sm lg:text-xl font-light md:font-normal lg:font-medium text-[#ffffff]">
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

      <div className="grid grid-cols-2 md:grid-cols-3 mt-12 gap-4">
        {CollectionTrippleData.map((item, index) => {
          return (
            <div key={index} className="relative">
              <Image
                src={item.img}
                alt=""
                width={580}
                height={580}
                className="object-cover h-[100%] w-full "
              />
              <div className="flex flex-col absolute top-1/2 left-0 md:left-5 -translate-x-0 -translate-y-1/2 pl-4">
                <span className="text-sm md:text-lg lg:text-xl text-[#ffffff] font-light md:font-normal lg:font-medium">
                  {item.title}
                </span>
                <span className="text-xs md:text-sm lg:text-base font-light md:font-normal lg:font-medium text-[#f87171] ">
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
export default Collection;

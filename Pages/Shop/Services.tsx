import React from "react";
import Image from "next/image";
import Servicesbackground from "../../public/Images/b2.jpg";

export const Services = () => {
  return (
    <div id="shop" className="mt-16 relative bg-red-200 ">
      <Image
        alt="ServiceImage"
        src={Servicesbackground}
        placeholder="blur"
        quality={100}
        className="h-32 md:h-64 w-full"
        // fill
        // sizes="100vw"
        style={
          {
            //   objectFit: "cover",
            // zIndex: 10,
            //   marginTop: 73,
          }
        }
      />
      <div className="flex flex-col gap-2 md:gap-4 items-center justify-center absolute top-0 left-0 right-0 bottom-0 mx-auto  max-w-[900px]  ">
        <h1 className="text-[#d1d5db] text-lg md:text-2xl font-semibold">
          Repair Services
        </h1>
        <h1 className="text-[#d1d5db] text-lg md:text-4xl lg:text-6xl font-semibold ">
          Up to <span className="text-[#dc2626] ">70% OFF</span>- All t-Shirts
        </h1>
        <button className="bg-[#d1d5db] px-3 py-1 md:px-4 md:py-2  group hover:bg-[#187c72]">
          <span className="text-[#474151] text-sm md:text-md lg:text-lg font-semibold group-hover:text-[#FFFFFF] ">
            Explore More{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

import { ArrivalData } from "@/app/data";
import Image from "next/image";
import React from "react";

const Arrival = () => {
  return (
    <div className="mt-5 md:mt-12">
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
              <div className="relative inline-block ml-1 ">
                <span className="text-lg text-[#6b7280] "> ★★★★★</span>
                <span className="text-lg absolute left-0 top-0 w-[21.5%] text-[#f97316] whitespace-nowrap overflow-hidden ">
                  {" "}
                  ★★★★★
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#187c72] font-semibold">
                  {item.price}
                </span>
                <div className="flex justify-center items-center h-8 w-12 rounded-xl group hover:bg-[#187c72]  bg-[#eaf5d8] ">
                  <svg
                    className="w-6 h-6 text-[#187c72] group-hover:text-[#ffffff] "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Arrival;

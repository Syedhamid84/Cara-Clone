import { TopbarItem } from "@/app/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoImage from "../public/Images/logo.png";

export const Topbar = () => {
  return (
    <div className="flex justify-between w-full fixed bg-[#5fafca] py-4 px-16 z-10 ">
      <Image src={LogoImage} alt="" height={150} width={150} />

      <div className="flex justify-around items-center w-1/2 ">
        {TopbarItem.map((item, index) => {
          return (
            <div
              key={index}
              className="text-[#374151] hover:text-[#8f7d5f] text-2xl font-semibold "
            >
              {item.name}
            </div>
          );
        })}
        <svg
          className="w-8 h-8 text-[#374151]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
          />
        </svg>
      </div>
    </div>
  );
};

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
      </div>
    </div>
  );
};

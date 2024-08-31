"use client";
import { TopbarItem } from "@/app/data";
import React, { useState } from "react";
import Image from "next/image";
import LogoImage from "../public/Images/logo.png";
import Link from "next/link";
import Hamburger from "hamburger-react";
import Mobilenavbar from "./Mobilenavbar";
import NavLogoImage from "./Topbar/NavLogoImage";

const Topbar = () => {
  const [open, setOpen] = useState(false);


  const scroll = (id: string, offSet: number) => {
    const target = document.getElementById(id);
    if (target) {
      const offset = offSet; // Adjust this value according to the height of your navbar
      const elementPosition =
        target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  const HandleMenuclick = () => {
    setOpen(false);

  }

  return (
    <div>

      <div className="flex justify-between w-full fixed left-0 right-0 top-0 bg-[#5fafca] py-4 px-5 md:px-16 z-50">

        <NavLogoImage />

        <div className="hidden md:flex gap-8 justify-around items-center max-w-1/2">
          {TopbarItem.map((item, index) => (
            // return (
            <button
              key={index}
              className="text-[#374151] hover:text-[#8f7d5f] text-2xl font-semibold "
              onClick={() => scroll(item.id, item.offset)}
              aria-current={item.id ? "page" : undefined}
            >
              {item.name}
            </button>
            // );
          ))}
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
            />
          </svg>
        </div>

        <div className="block md:hidden">
          <Hamburger toggled={open} toggle={setOpen} />
        </div>

        {open && <Mobilenavbar handlemenuclick={HandleMenuclick} isOpen={open} />}
      </div>
    </div>

  );
};
export default Topbar;

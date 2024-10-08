// To inform next js, this is a client component
"use client";
import { TopbarItem } from "@/app/data";
import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const HandleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="bg-[#5eaec9]  p-3 lg:h-auto lg:w-auto w-[50%] ">
      {/* <button onClick={HandleModal}> */}
      <FaXTwitter onClick={HandleModal} />
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
      <div className="flex flex-col items-start gap-8 px-8 py-12">

        {showModal &&
          TopbarItem.map((item, index) => {
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
export default Sidebar;

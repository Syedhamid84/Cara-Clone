import React from "react";

export const Newsletter = () => {
  return (
    <div id="contact" className="flex flex-col items-center lg:flex-row md:justify-between gap-5 px-20 py-10 mt-12 bg-[#031d42]">
      <div className="flex flex-col items-center  max-w-[460px] md:w-[450px]">
        <h1 className="text-xl md:text-2xl text-white font-extrabold ">Sign Up for Newsletter</h1>
        <p className="text-sm md:text-base text-white">
          Get E-mail updates about our latest shop and{" "}
          <span className="text-[#eab308] text-base">special offers</span>
        </p>
      </div>

      <div className="flex items-center rounded-md text-xs md:text-sm lg:text-base">
        <input
          type="text"
          placeholder="Enter your email"
          className="h-10 w-64 py-2 px-3 bg-[#f3f4f6] rounded-l-md"
        />
        <button className="h-10 w-20 flex justify-center items-center  text-white bg-[#187c72] text-base rounded-r-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

import React from "react";

export const Newsletter = () => {
  return (
    <div className="flex justify-between gap-5 px-16 py-10 mt-24 bg-[#031d42] ">
      <div className="flex flex-col">
        <h1 className="text-2xl text-white ">Sign Up for Newsletter</h1>
        <p className="text-white">
          Get E-mail updates about our latest shop and{" "}
          <span className="text-[#eab308] text-base">special offers</span>
        </p>
      </div>

      <div className=" ">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-64 py-2 px-3 bg-[#f3f4f6] rounded-l-md "
        />
        <button className="py-2 px-3 text-white bg-[#187c72] text-base rounded-r-md">
          Sign Up
        </button>
      </div>
    </div>
  );
};

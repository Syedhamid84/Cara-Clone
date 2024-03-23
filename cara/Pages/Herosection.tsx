import React from "react";
import heroImage from "../public/Images/hero.jpg";
import buttonImage from "../public/Images/button.png";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className="">
      <Image
        alt="heroImage"
        src={heroImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
          marginTop: 73,
        }}
      />
      <div className="flex flex-col gap-2 pt-56 pl-16">
        <p className="text-xl font-semibold ml-1 text-[#374151]">
          Trade-in-offer
        </p>
        <p className="text-5xl font-bold text-[#374151]">Super value deals</p>
        <p className="text-6xl font-bold text-[#187c72] ">On all products</p>
        <p className="text-xl font-semibold mt-2 ml-1 text-[#374151]">
          Save more with coupons & upto 70% off!
        </p>
        <div className="relative">
          <Image alt="buttonImage" src={buttonImage} />
          <p className="text-xl font-bold text-[#187c72]  absolute bottom-3 left-14">
            Shop Now
          </p>
        </div>
      </div>
    </div>
  );
};

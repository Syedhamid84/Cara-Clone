import React from "react";
import heroImage from "../public/Images/hero.jpg";
import buttonImage from "../public/Images/button.png";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <section className=" mt-[74px]">
      <div className="relative">

        <Image
          alt="heroImage"
          src={heroImage}
          placeholder="blur"
          quality={100}
          className=""
          style={{
            objectFit: "contain",
            zIndex: 0,

          }}
        />
        <div className="flex flex-col justify-start gap-1 md:gap-2 pt-2 md:pt-10 pl-2 md:pl-16 max-w-[540px] absolute top-4 md:top-28 left-0 md:left-5 bg-red-20" >
          <p className="text-xl font-semibold  text-[#374151]">
            Trade-in-offer
          </p>
          <p className="text-base md:text-4xl lg:text-5xl font-bold text-[#374151]">Super value deals</p>
          <p className="text-base md:text-4xl lg:text-6xl font-bold text-[#187c72] ">On all products</p>
          <p className="text-base md:text-xl font-semibold mt-0.5 md:mt-2 ml-0 md:ml-1 text-[#374151]">
            Save more with coupons & upto 70% off!
          </p>
          <div className="relative w-40 md:w-56">
            <Image alt="buttonImage" src={buttonImage} className="" />
            <p className="text-base md:text-xl font-bold text-[#187c72]  absolute bottom-1 md:bottom-3 left-8 md:left-14">
              Shop Now
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

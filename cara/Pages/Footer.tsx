import React from "react";
import Image from "next/image";
import GooglePlay from "../public/Images/gplayLogo.png";
import AppStore from "../public/Images/appstorLogo.png";
import MasterCard from "../public/Images/mastercard.png";
import Visa from "../public/Images/visa.png";
import Paypal from "../public/Images/paypal.png";
import Gpay from "../public/Images/gplayLogo.png";

export const Footer = () => {
  const currentDate = new Date();
  //   console.log("cureent date is ", currentDate);
  return (
    <div className="grid grid-cols-4 px-16 py-10 ">
      <div>
        <h1 className="text-[#374151] font-semibold my-4 ">Contact</h1>
        <p className="text-[#374151] font-semibold">
          Address:{" "}
          <span className="text-[#6b7280] font-light">
            562 ipsum dolor sit amet consectetur adipisicing.
          </span>
        </p>
        <p className="text-[#374151] font-semibold">
          Phone: <span className="text-[#6b7280] font-light ">1234567890</span>
        </p>
        <p className="text-[#374151] font-semibold">
          Address: <span className="text-[#6b7280] font-light">24/7</span>
        </p>
        <p className="text-[#374151] font-semibold">Follow us</p>
        <div></div>
      </div>

      <div className="list-none justify-self-center w-56 mb-12">
        <h1 className="text-[#374151] font-semibold my-4">About</h1>
        <li className="text-[#6b7280] text-base ">About Us</li>
        <li className="text-[#6b7280] font-light">Privacy Policy</li>
        <li className="text-[#6b7280] font-light">Delivery Information</li>
        <li className="text-[#6b7280] font-light">Terms & Conditions</li>
        <li className="text-[#6b7280] font-light">Contact Us</li>
      </div>

      <div className="list-none">
        <h1 className="text-[#374151] font-semibold my-4">My Account</h1>
        <li className="text-[#6b7280] font-light">Sign in</li>
        <li className="text-[#6b7280] font-light">View Cart</li>
        <li className="text-[#6b7280] font-light">My Wishlist</li>
        <li className="text-[#6b7280] font-light">Track My Order </li>
        <li className="text-[#6b7280] font-light">Help</li>
      </div>

      <div>
        <h1 className="text-[#374151] font-semibold my-4">Install App</h1>
        <p className="text-[#6b7280] font-light">
          From App Store or Google Play
        </p>
        <div className="flex gap-2">
          <Image src={GooglePlay} alt="" width={112} />
          <Image src={AppStore} alt="" width={112} />
        </div>
        <p className="text-[#6b7280] font-light">Secured Payment Gateway</p>
        <div className="flex gap-1">
          <Image src={MasterCard} alt="" width={56} />
          <Image src={Visa} alt="" width={56} />
          <Image src={Paypal} alt="" width={56} />
          <Image src={Gpay} alt="" width={56} />
        </div>
      </div>

      <div className="flex items-center justify-center bg-gray-500 w-full">
        <p className="text-[#6b7280] text-base ">
          © <span>h</span> Click Here for Developer's Github
        </p>
      </div>
    </div>
  );
};

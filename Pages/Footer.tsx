import React from "react";
import Image from "next/image";
import GooglePlay from "../public/Images/gplayLogo.png";
import AppStore from "../public/Images/appstorLogo.png";
import MasterCard from "../public/Images/mastercard.png";
import Visa from "../public/Images/visa.png";
import Paypal from "../public/Images/paypal.png";
import Gpay from "../public/Images/gpay.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // console.log(currentYear, "cureent date is ");
  return (
    <div className=" px-20 py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className=" ">
          <h1 className="text-[#374151] font-semibold my-4 ">Contact</h1>
          <p className="text-[#374151] font-semibold">
            Address:{" "}
            <span className="text-[#6b7280] font-light">
              562 ipsum dolor sit amet consectetur adipisicing.
            </span>
          </p>
          <p className="text-[#374151] font-semibold">
            Phone:{" "}
            <span className="text-[#6b7280] font-light ">1234567890</span>
          </p>
          <p className="text-[#374151] font-semibold">
            Address: <span className="text-[#6b7280] font-light">24/7</span>
          </p>
          <p className="text-[#374151] font-semibold">Follow us</p>
          <div className="flex gap-1 items-center">
            <svg
              className="w-5 h-5 text-[#6b7280] "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <FaXTwitter className="text-[#6b7280] " />
            <FaInstagram className="text-[#6b7280]" />
            <FaPinterestP className="" />

            <svg
              className="w-5 h-5 text-[#6b7280]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="list-none ">
          <h1 className="text-[#374151] font-semibold my-4">About</h1>
          <li className="text-[#6b7280] font-light text-sm mt-1">About Us</li>
          <li className="text-[#6b7280] font-light text-sm mt-1">
            Privacy Policy
          </li>
          <li className="text-[#6b7280] font-light text-sm mt-1">
            Delivery Information
          </li>
          <li className="text-[#6b7280] font-light text-sm mt-1">
            Terms & Conditions
          </li>
          <li className="text-[#6b7280] font-light text-sm mt-1">Contact Us</li>
        </div>

        <div className="list-none flex flex-col gap-1">
          <h1 className="text-[#374151] font-semibold my-4">My Account</h1>
          <li className="text-[#6b7280] font-light text-sm">View Cart</li>
          <li className="text-[#6b7280] font-light text-sm">Sign in</li>
          <li className="text-[#6b7280] font-light text-sm">
            My Wishlist
          </li>
          <li className="text-[#6b7280] font-light text-sm mt-1">
            Track My Order{" "}
          </li>
          <li className="text-[#6b7280] font-light text-sm mt-1">Help</li>
        </div>

        <div className="w-full flex flex-col gap-1">
          <h1 className="text-[#374151] font-semibold my-4">Install App</h1>
          <p className="text-[#6b7280] font-light">
            From App Store or Google Play
          </p>
          <div className="flex gap-2 w-40">
            <Image src={GooglePlay} alt="" className="w-24 md:w-28" />
            <Image src={AppStore} alt="" className="w-24 md:w-28" />
          </div>
          <p className="text-[#6b7280] font-light mt-1">
            Secured Payment Gateway
          </p>
          <div className="flex gap-1 w-40 ">
            <Image src={MasterCard} alt="" className="w-12 md:w-16" />
            <Image src={Visa} alt="" className="w-12 md:w-16" />
            <Image src={Paypal} alt="" className="w-12 md:w-16" />
            <Image src={Gpay} alt="" className="w-12 md:w-16" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <p className="text-[#9ca3af] text-base ">
          © <span className="text-base ">{currentYear}</span> Click Here for
          Developer's Github
        </p>
      </div>
    </div>
  );
};

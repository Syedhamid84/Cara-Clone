import React from 'react'
import Image from 'next/image'
import Servicesbackground from "../public/Images/b2.jpg"

export const Services = () => {
  return (
    <div className='mt-16 relative'>
         <Image
        alt="ServiceImage"
        src={Servicesbackground}
        placeholder="blur"
        quality={100}
        // fill
        // sizes="100vw"
        style={{
        //   objectFit: "cover",
        //   zIndex: -1,
        //   marginTop: 73,
        }}
      />
      <div className='flex flex-col gap-4 items-center absolute top-12 left-56 '>
      <h1 className='text-[#d1d5db] text-2xl font-semibold'>Repair Services</h1>
      <h1 className='text-[#d1d5db] text-6xl font-semibold '>Up to <span className='text-[#dc2626] '>70% OFF</span>- All t-Shirts</h1>
      <button className='bg-[#d1d5db] px-4 py-2  group hover:bg-[#187c72]'>
        <span className='text-[#474151] text-lg font-semibold group-hover:text-[#FFFFFF] '>Explore More </span>
        </button>
      </div>
    </div>
  )
}

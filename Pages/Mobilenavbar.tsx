"use client";
import { TopbarItem } from '@/app/data'
import React from 'react'

const Mobilenavbar = ({ handlemenuclick, isOpen }: any) => {

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
            handlemenuclick();
        }
    }
    return (
        <div className={`fixed inset-0  w-1/2 transform top-20 ${isOpen ? "translate-x-full " : "translate-x-full"} transition-transform duration-300 ease-in-out shadow-md z-50 `}>
            <div className="flex flex-col gap-8 w-full h-full bg-[#5fafca]">
                {TopbarItem.map((item, index) => (
                    <button
                        key={index}
                        className="text-[#374151] hover:text-[#8f7d5f] text-2xl font-semibold "
                        onClick={() => scroll(item.id, item.offset)}
                        aria-current={item.id ? "page" : undefined}
                    >
                        {item.name}
                    </button>
                ))}

            </div>

        </div>
    )
}
export default Mobilenavbar

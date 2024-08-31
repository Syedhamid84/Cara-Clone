import React from 'react'
import Image from "next/image";
import LogoImage from "../../public/Images/logo.png";

const NavLogoImage = () => {

    const scroll = (id: number, offSet: number) => {
        // const target = document.getElementById(id);
        let target = document.documentElement;
        if (target) {
            const offset = offSet;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            console.log("elementPosition", elementPosition);
            console.log("offsetPosition", offsetPosition);

        }
    }

    const logoid = 0;
    const logooffset = 0
    return (

        <button onClick={() => scroll(logoid, logooffset)}>

            <Image src={LogoImage} alt="logo" height={120} width={120} />
        </button>
    )
}
export default NavLogoImage

// import Link from 'next/link';
// import React from 'react';
// import Image from 'next/image';
// import LogoImage from '../../public/Images/logo.png';

// const NavLogoImage = () => {

//     const scroll = (id: string | number, offset: number) => {
//         let target: HTMLElement | null;

//         if (typeof id === "string") {
//             target = document.getElementById(id);
//         } else {
//             target = document.documentElement; // Scroll to the top of the page
//         }

//         if (target) {
//             const elementPosition = target.getBoundingClientRect().top;
//             const offsetPosition = elementPosition + window.pageYOffset - offset;

//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: "smooth",
//             });
//         }
//     };

//     const logoid = 0; // Set to 0 to scroll to the top of the page
//     const logooffset = 0; // Adjust this value to set the offset

//     return (
//         <button onClick={() => scroll(logoid, logooffset)}>
//             <Image src={LogoImage} alt="Logo" height={120} width={120} />
//         </button>
//     );
// };

// export default NavLogoImage;

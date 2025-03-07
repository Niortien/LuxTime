import React from "react";
import Image from "next/image";
import img1 from "@/public/Assets/Images/Articles/shopping-bag.png";
import img2 from "@/public/Assets/Images/Articles/world-wide-web.png";
import img4 from "@/public/Assets/Images/Articles/down.png";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center pt-2 max-w-screen-2xl group relative  ">
      <div className=' group h-10 sm:w-[70%]  w-10 border-4 fixed border-red-900 left-0  top-0 flex items-center z-10   sm:hidden'>
      <div className="border-gray-400 border-2 w-full "></div>
      <div className="border-gray-400 border-2 w-full"></div>
      <div className="border-gray-400 border-2 w-full"></div>
      </div> 
      <div className="sm:flex bg-semiwhite sm:max-w-xl sm:bg-none max-w-11/12 group-hover:flex sm:h-4 flex-col w-full sm:flex-row  sm:top-0  sm:relative z-[2]   fixed top-4  h-96 justify-around sm:ring-0  sm:shadow-none shadow-2xl rounded-2xl ring-1  hidden sm:gap-0 gap-8  items-center">
        <a href="">Home</a>
        <a href="">Collection</a>
        <a href="">About</a>
        <a href="">Contacts</a>
      </div>
      <h1 className="sm:relative sm:left-[-150px] sm:flex hidden   sm:text-2xl">LuxTime</h1>
      <div className="flex gap-2  ">
        <div className="sm:flex hidden ">
          <Image src={img1} alt="iconshooping" className="h-6 w-6" />
        <Image src={img2} alt="iconworldweb" className="h-4 w-4 mt-1" />
        </div>
        <div className="flex gap-1 self-end">
        <p>Eng</p>
        <Image src={img4} alt="icondown" className="h-4 w-4 mt-1  " />
        </div>
      </div>
    </nav>
  );
}

"use client"
import React from "react";
import Image from "next/image";
import img1 from "@/public/Assets/Images/Articles/shopping-bag.png";
import img2 from "@/public/Assets/Images/Articles/world-wide-web.png";
import img4 from "@/public/Assets/Images/Articles/down.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const routeur=useRouter()
  const handlclick= ()=> routeur.push("/panier")
  return (
    <nav className="flex justify-around items-center pt-2 max-w-screen-2xl group relative  ">
      <div className=" group h-10 sm:w-[70%]  w-10  fixed  overflow-hidden   top-0 flex items-center z-10 flex-col justify-between rounded-sm left-3 ring ring-black sm:hidden">
        <div className="border-gray-400 border-2 w-full "></div>
        <div className="border-gray-400 border-2 w-full"></div>
        <div className="border-gray-400 border-2 w-full"></div>
        
      </div>

      <div className=" sm:flex  sm:max-w-xl  max-w-11/12 group-hover:flex sm:h-4 flex-col w-full sm:flex-row  sm:top-0  sm:relative z-[2]   fixed top-4  h-96 justify-around sm:ring-0  sm:shadow-none shadow-2xl rounded-2xl ring-1  hidden sm:gap-0 gap-8  items-center ">
        <Link href="/" className="sm:bg-semiwhite ">Home</Link>
        <Link href="/collection"className="sm:bg-semiwhite">Collection</Link>
        <Link href="/about"className="sm:bg-semiwhite">About</Link>
        <Link href="/contact"className="sm:bg-semiwhite">Contacts</Link>
      </div>
     
      <Link href={"/"} className="text-4xl  sm:relative sm:left-[-150px] sm:flex hidden sm:text-3xl font-bold " >LuxTime</Link>
    
      <div className="flex gap-2  ">
        <div className="sm:flex hidden " onClick={handlclick}>
        <Image src={img1} alt="iconshooping" className="h-6 w-6 cursor-pointer focus:bg-primary-300 " />
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

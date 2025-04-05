"use client"
import React from "react";
import Image from "next/image";
import img1 from "@/public/Assets/Images/Articles/shopping-bag.png";
import img2 from "@/public/Assets/Images/Articles/world-wide-web.png";
import img4 from "@/public/Assets/Images/Articles/down.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFinc } from "@/Store/Store";
import { MenuIcon, MenuSquare } from "lucide-react";

export default function Navbar() {
  
  const routeur=useRouter()
  const handlclick= ()=> routeur.push("/panier")
  const {cartArray}=useFinc();
  return (
    <nav className="flex justify-around items-center pt-2 max-w-screen-2xl group relative  ">
      <div className=" group h-10 sm:w-[70%]  w-10  fixed  overflow-hidden   top-0  z-10 flex-col   left-3  sm:hidden">
        
        <MenuSquare size={50}   className="stroke-primary-600"/>
        
      </div>

      <div className=" sm:flex  sm:max-w-xl  max-w-11/12 group-hover:flex sm:h-4 flex-col w-full sm:flex-row  sm:top-0  sm:relative z-[2]   fixed top-4  h-96 justify-around sm:ring-0  sm:shadow-none shadow-2xl rounded-2xl ring-1  hidden sm:gap-0 gap-8  items-center ">
        <Link href="/" className="sm:bg-semiwhite ">Home</Link>
        <Link href="/collection"className="sm:bg-semiwhite">Collection</Link>
        <Link href="/about"className="sm:bg-semiwhite">About</Link>
      </div>
    
      <Link href={"/"} className="text-4xl  sm:relative sm:left-[-150px] sm:flex hidden sm:text-3xl font-bold " >LuxTime</Link>
    
      <div className="flex gap-2  ">
        <div className="sm:flex hidden ">
       <div className="relative"  onClick={handlclick}>
       <Image src={img1} alt="iconshooping" className="h-6 w-6 cursor-pointer focus:bg-primary-300 " />
       <div className=" border-red-700 rounded-full flex justify-center items-center bg-amber-400 absolute h-5 w-5 top-2 right-3">
            {cartArray.length}
          </div>
       </div>
    
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

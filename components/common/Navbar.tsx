import React from "react";
import Image from "next/image";
import img1 from "@/public/Assets/Images/Articles/shopping-bag.png";
import img2 from "@/public/Assets/Images/Articles/world-wide-web.png";
import img4 from "@/public/Assets/Images/Articles/down.png";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center pt-2 ">
      <div className="flex gap-8">
        <a href="">Home</a>
        <a href="">Collection</a>
        <a href="">About</a>
        <a href="">Contacts</a>
      </div>
      <h1 className="relative left-[-150px] text-2xl">LuxTime</h1>
      <div className="flex gap-2">
        <Image src={img1} alt="iconshooping" className="h-6 w-6" />
        <Image src={img2} alt="iconworldweb" className="h-4 w-4 mt-1" />
        <p>Eng</p>
        <Image src={img4} alt="icondown" className="h-4 w-4 mt-1" />
      </div>
    </nav>
  );
}

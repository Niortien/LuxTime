import React from "react";
import Image from "next/image";
import img1 from "@/public/Assets/Images/Articles/img2.jpg";

import RingList from "./RingList";
export default function Trendy() {
  return (
    <div className="  ">
      <h1 className="text-center font-title font-bold text-3xl">Tending Products</h1>
      <div className=" sm:w-[88%] sm:ml-20 h-80 mb-5 relative ">
        <div className="relative h-80 rounded-2xl overflow-hidden object-fit z-[-10]  ">
          <Image src={img1} alt="img1" className=" w-full h-full "/>
        </div>
        <div className="absolute  opacity-75 shadow-xl border top-1 sm:h-64 h-72 sm:w-80  w-64 border-white text-bold flex flex-col pl-6 py-6 justify-around  left-5 rounded-2xl">
          <span>COLLECTION</span>
          <h1 className="text-2xl font-title font-bold">Royal Charm</h1>
          <p>Introducing our  new women's watch collection ,whitch embodies elegance, sophistication
            and impeccable style
          </p>
          <button className="border-1 w-40 py-2 px-2 rounded-2xl shadow-2xs ">
            SHOP NOW
          </button>

        </div>
      </div>
      <RingList></RingList>
    </div>
  );
}

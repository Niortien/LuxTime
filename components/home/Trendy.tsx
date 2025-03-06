import React from "react";
import Image from "next/image";
import img1 from "@/public/Assets/Images/Articles/img2.jpg";
import RingList from "./RingList";

export default function Trendy() {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center pt-20">
        Trending Products
      </h1>
      <div className="relative left-45 pt-5 w-[900px] h-[400px]">
        <Image src={img1} alt="" className="h-76 w-[850px] rounded-xl  " />
        <div className=" w-[310px] h-[270px] bg-gray-100 opacity-40 backdrop-blur-2xl p-4 absolute top-[25] left-8 rounded-xl border border-gray-300 ">
          <div className=" px-4 ">
            <h1 className="">COLLECTION</h1>
            <h2 className="font-bold text-2xl">Royal Charm</h2>
            <p className="text-sm">
              Indroducing our news women&apos;s <br />
              Watch collection, which embodies <br />
              elegance,sophistication and impeccables style
            </p>
            <button className="border border-black rounded-xl px-4 mt-8">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <RingList />
    </div>
  );
}

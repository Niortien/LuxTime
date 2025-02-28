import React from "react";
import Image from "next/image";
import img6 from "@/public/Assets/Images/Articles/montre fond noir 1.jpg";
import img7 from "@/public/Assets/Images/Articles/montre fond noir 2.jpg";
import img8 from "@/public/Assets/Images/Articles/montre fond noir 3.jpg";
import img9 from "@/public/Assets/Images/Articles/montre fond noir 4.jpg";
import img10 from "@/public/Assets/Images/Articles/montre fond noir 5.jpg";

export default function Collection() {
  return (
    <div className="px-20">
      <p className="font-bold text-2xl text-center">Our Colletion</p>
      <div className="flex justify-center gap-8 mt-10">
        <button className="bg-[#9F8361] rounded-xl px-8 h-9">Men Luxury</button>
        <button className="border-2 border-[#9F8361] rounded-xl px-8 h-9 ">
          Woman Luxury
        </button>
        <button className="border-2 border-[#9F8361] rounded-xl px-8 h-9">
          Unisex Luxury
        </button>
      </div>

      <div className="  flex h-76 mt-10 gap-1 ">
        <div className=" w-[30%] ">
          <Image
            src={img6}
            alt="image6"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" grid grid-cols-3 grid-rows-2 w-[70%] gap-1">
          <div className="  col-span-2 ">
            <Image
              src={img7}
              alt="image7"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" ">
            <Image src={img8} alt="image8" className="w-full h-full " />
          </div>
          <div className=" ">
            <Image
              src={img9}
              alt="image9"
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" col-span-2 ">
            <Image
              src={img10}
              alt="image10 "
              className="w-full h-full object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

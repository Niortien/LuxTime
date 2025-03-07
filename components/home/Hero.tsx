"use client"
import React from "react";
import Image from "next/image";
import img3 from "@/public/Assets/Images/Articles/326933ch-removebg-preview (1).png";
import Navbar from "@/components/common/Navbar";


export default function Hero() {
  return (
    <div className="relative z-10 overflow-hidden max-w-screen-2xl mx-auto">
       <Navbar />
      <div className=" sm:flex justify-between px-[150px] ">
        <div>
        <h1 className="text-xl font-bold  mt-[150px] font-title sm:hidden  ">
            Feel the Time. 
            Dedine Your Style.
          </h1>
          <h1 className="hidden sm:block text-4xl font-bold  mt-[150px] font-title ">
            Feel the Time. <br />
            Dedine Your Style.{" "}
          </h1>
          <h2 className="font-title">Luxury in every detail,precision in every tick. </h2>
        </div>
        <Image
          src={img3}
          alt="montre1"
          className="bg-opacity-5 relative h-[400px] w-[250px] mt-[100px] left-[-100px]"
        />
      </div>
      <div className="absolute z-[-2] top-0 h-[590px] bottom-40 right-0 w-[73%] bg-primary-100"></div>
      
      {/* <button color="primary">Choose your</button>   */}

    </div>
  );
}

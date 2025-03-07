"use client"
import React from "react";
import Image from "next/image";
import img1 from "@/public/Assets/Images/Articles/img2.jpg";
import img2 from "@/public/Assets/Images/Articles/img1.jpg";
import { Button } from "@/components/ui/Button";


export default function About() {
  
  return (
    <div className=" py-5   max-w-screen-2xl mx-auto  sm:mt-10">
      <h1 className="text-center f font-bold text-2xl sm:mb-5">About</h1>
      <div className="flex gap- mt-10 justify-around  sm:flex-row flex-col">
        <div className=" flex flex-col sm:w-[48%] rounded-2xl    h-[650px] ">
          <p className="font-ligh ">
            LuxTime is a young.fast-growing company based in the heart of
            London. <br />
            Founded in 2021.LT was born from a passion for redefining the way
            people <br />
            see watche - not just as timkeepers,but as bold fashion statements.
          </p>

          <div className="relative  h-[600px] w-[88%] rounded-md overflow-hidden mt-4 ">
            <Image src={img1} className="h-full w-full" alt="img1" />
          </div>
        </div>
        <div className="flex flex-col sm:w-[33%] sm:mt-0 mt-4 gap-25  px-5">
          <div>
            <div className="rounded-xl   h-[400px] overflow-hidden">
              <Image src={img2} alt="img2" className="w-full h-full" />
            </div>
            <p className="mt-5">
              Whether you&apos;re dressing up or keepind it <br />
              casual.LuxTime is here to make sure you <br />
              do it in style.
            </p>
          </div>
<<<<<<< HEAD
         <div className="sm:flex hidden">
         <Button  />
         </div>
=======
          <Button color="primary">Choose your</Button>
>>>>>>> origin/laetitia
        </div>
      </div>
    </div>
  );
}

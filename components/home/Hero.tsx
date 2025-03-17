"use client";
import React from "react";
import Image from "next/image";
import img3 from "@/public/Assets/Images/Articles/326933ch-removebg-preview (1).png";
import { Button } from "../ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative z-10 sm:overflow-hidden max-w-screen-xl mx-auto top-0  ">
      <div className="flex sm:flex-row sm:justify-between sm:px-[150px] sm:items-start items-center flex-col justify-around   ">
        <div>
          <h1 className="text-4xl font-bold  mt-[150px] font-title  ">
            Feel the Time. <br />
            Dedine Your Style.{" "}
          </h1>
          <h2 className="font-title">
            Luxury in every detail,precision in every tick.{" "}
          </h2>
        </div>
        <div className=" relative sm:h-[400px] sm:w-[28%]  w-[70%] sm:mt-[100px] mt-0 sm:left-[-100px]  object-cover">
          <Image src={img3} alt="montre1" className="" />
        </div>
      </div>
      <div className="sm:absolute sm:z-[-2] sm:top-0 sm:h-[590px] sm:bottom-40 sm:right-0 sm:w-[82%] sm:bg-primary-100"></div>
      <div className="w-[20%] sm:ml-10 ml-10 mt-2 ">
        <Link href={"/collection"}>
          <Button>Choose your</Button>
        </Link>
      </div>
    </div>
  );
}

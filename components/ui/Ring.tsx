import React from "react";
import Image, { StaticImageData } from "next/image";

export interface IRing {
  id: number;
  pathi: StaticImageData;
  pathi0: string;
  pathi1: string;
}

export default function Ring({ id, pathi, pathi0, pathi1 }: IRing) {
  return (
    <div className="relative" key={id}>
      <div className="">
        <div className="rounded-2xl relative  border-red-500 overflow-hidden h-[120px] w-[420px] mr-8">
          <Image src={pathi} alt="" className="w-full h-full" />
        </div>
        <div className="absolute top-5 left-4">
          <p className="text-white font-bold text-2xl">{pathi0}</p>
          <p className="text-white">{pathi1}</p>
         
        </div>
      </div>
    </div>
  );
}

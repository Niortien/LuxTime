import React from "react";
import Image, { StaticImageData } from "next/image";

export interface IRing {
  id: number;
  pathi: StaticImageData;
  pathi0: string;
  pathi1: string;
  pathi2:string;
}

export default function Ring({ id, pathi, pathi0, pathi1,pathi2 }: IRing) {
  return (
    <div className="relative  overflow-hidden   " key={id}>
      <div className=" relative rounded-2xl    h-50">
        <Image  src={pathi} alt="img2"className="h-full rounded-2xl  object-center  " />
      </div>
      <div className=" absolute top-12 left-4 text-white h-28 flex gap-2 flex-col">
        <h1 className="text-2xl font-bold font-title" >{pathi0} </h1>
        <p> {pathi1} </p>
        <h6 className="text-xs"> {pathi2} </h6>
      </div>
    </div>
  );
}

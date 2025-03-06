import React from "react";
import Image, { StaticImageData } from "next/image";

export interface ISquare {
  id: number;
  pathi: StaticImageData;
  marque: string;
  serie: string;
  price: number;
}

export default function Squares({ id, pathi, marque, serie, price }: ISquare) {
  return (
    <div className="h-96 W-96 " key={id}>
      <div>
        <div className="h-60 w-64 bg-[#F4F4F4] rounded-md ">
          <Image src={pathi} alt="" className="w-full h-full object-contain" />
        </div>
        <div className=" p-4">
          <p className="text-center "> {marque} </p>
          <p className="font-bold"> {serie} </p>
          <p className="text-center">$ {price}.00 </p>
        </div>
      </div>
    </div>
  );
}

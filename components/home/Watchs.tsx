import React from 'react'
import Image, { StaticImageData } from "next/image";

export interface IWatchs {
  id: number;
  pathi: StaticImageData;
  name: string;
  description: string;
  price:string;
}
export default function Watchs({id,pathi,name,description,price}:IWatchs) {

  return (
    <div className=" " key={id}>  
          <div className="h-24 w-24">
            <Image  src={pathi} alt="img2"className=" " />
          </div>
          <div className=" ">
            <h1 className="text-2xl font-bold font-title" >{name} </h1>
            <p> {description} </p>
            <h6 className="text-xs"> {price} </h6>
          </div>
        </div>
  )
}

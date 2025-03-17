import Image, { StaticImageData } from 'next/image';
import React from 'react'


export interface IWatchs {
  id: number;
  pathi: StaticImageData;
  name: string;
  description: string;
  serie:string;
  price:string;
}
export default function Product( {id,pathi,name,description,serie,price}:IWatchs) {
  return (
    <div>
        <div className=" pt-2" key={id} >  
                  <div className="h-60 w-56 bg-gray-200 rounded-md relative ">
                    <Image  src={pathi} alt="img2"className="w-full h-full object-contain " />
                  </div>
                  <div className="text-center">
                    <h1 className="" >{name} </h1>
                    <p> {description} </p>
                    <p>{serie}</p>
                    <h6 className=""> {price} </h6>
                  </div>
                </div>
    </div>
  )
}

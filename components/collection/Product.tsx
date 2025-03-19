"use client"
import useContent from '@/app/contact/useContent';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from '../ui/Button';
import Link from 'next/link';


export interface IWatchs {
  id: number;
  pathi: StaticImageData;
  name: string;
  description: string;
  serie:string;
  price:string;
  

}
const messae=()=>{ alert("issa")}

export default function Product( {id,pathi,name,description,serie,price}:IWatchs) {
  const {handleTranfert,handleCangeImage,handleCangeId}=useContent()
   const router=useRouter()
  const handleClick = () => {
    
    router.push('/contact/details')
    
  }
 

 
  return (
    <div>
        <div className=" " key={id} onClick={()=>handleClick()}    >  
                  <div className="h-60 w-56 bg-gray-200 rounded-md relative  ">
                    <Image  src={pathi} alt="img2"className="w-full h-full object-contain " />
                  </div>
                  <div className="text-center">
                    <h1 className="" >{name} </h1>
                    <p> {description} </p>
                    <p>{serie}</p>
                    <h6 className=""> {price} </h6>
                    <div className='flex gap-3 '>
                    
                    </div>
                  </div>
                </div>
    </div>
  )
}

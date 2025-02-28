import React from 'react'
import { Interface } from 'readline'
import Image from 'next/image'
import Button1 from './Button1'

export interface IRing{
    data:{
        id:number
        pathi:string
        pathi0:string
        pathi1:string
    }
}
export default function Ring ({data}:IRing) {
  return (
    <div className=' relative'>
        <div className=''>
            <div className='rounded-2xl relative  border-red-500 overflow-hidden h-[150px] w-[400px]'>
                <Image src={data.pathi} alt='' className='w-full h-full'/>
            </div>
            <div className='absolute top-5 left-4'>
                <p className='text-white font-bold text-2xl'>{data.pathi0}</p>
                <p className='text-white'>{data.pathi1}</p>
               <button></button>
            </div>
        </div>
    </div>
  )
}

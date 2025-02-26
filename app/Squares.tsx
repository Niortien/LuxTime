import React from 'react'
import { Interface } from 'readline'
import Image from 'next/image'

export interface ISquare{
    data:{
        id:number
        pathi:string,
        marque:string,
        edition:string,
        price:number

    }
    
}

export default function Squares({data}:ISquare) {
  return (
    <div className='h-96 W-96 '>
      <div>
        <div className='h-60 w-64 bg-[#F4F4F4] rounded-md '>
        <Image src={data.pathi} alt='' className='w-full h-full' />
        </div>
        <div className=' p-4'>
          <p className='text-center'> {data.marque} </p>
          <p className='font-bold'> {data.edition} </p>
          <p className='text-center'>$ {data.price} </p>
        </div>
      </div>
    </div>
  )
}

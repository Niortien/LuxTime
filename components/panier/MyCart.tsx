import React from 'react'
import Image from 'next/image'
import img1 from "@/public/Assets/Images/Articles/montre-homme--festina6-removebg-preview.png"
import { Button } from '../ui/Button'

export default function MyCart() {
  return (
    <div>
      <div className='px-30 pt-10 '>
        <h1 className='font-bold'>My Cart</h1>
        <div className='flex justify around gap-100 pt-10 font-bold border-b'>
          <p className=''>Product </p>
          <div className='flex justify-between gap-25 '>
            <p>Prix</p>
            <p>Qty</p>
            <p>Price</p>
            <p>Remove </p>
          </div>
        </div>
        <div className='flex gap-50 border-b'>
        <div className='flex gap-5'>
        <Image src={img1} alt='' className='w-24 h-24 border border-gray-50' />
        <p className='font-bold'>Rolex-Datejust</p>
        </div>
        <div className='flex gap-20 '>
          <p>$15075.00</p>
          <p className='border border-black w-15 h-fit text-center rounded-sm'>1</p>
          <p>$15075.00</p>
          <p className='font-bold text-sm'>X</p>
        </div>
        </div>
        </div>
        <div>
          <p>Total</p>
          <p>$15075.00</p>
        </div>
        <div>
          <Button/>
        </div>
    </div>
  )
}

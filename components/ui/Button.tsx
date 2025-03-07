import React from 'react'
import Image from 'next/image'
import img1 from "@/public/Assets/Images/Articles/right-arrow.png"

export default function Button() {
  return (
    <div className='flex   gap-2 justify-center items-center   cursor-pointer  w-36 '>        
<p>Choose your</p>
<Image src={img1} alt='iconarrow' className='h-8 w-8'/></div>
  )
}

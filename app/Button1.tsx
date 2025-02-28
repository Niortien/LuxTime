import React from 'react'
import Image from 'next/image'
import img1 from "@/public/Assets/Images/Articles/right-arrow.png"
type Props = {}

export default function Button1({}: Props) {
  return (
    <div className='flex '>
      <p>Redem code</p>
     <Image src={img1} alt='img1'/>
    </div>
  )
}
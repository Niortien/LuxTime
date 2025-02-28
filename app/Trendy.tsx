import React from 'react'
import Image from 'next/image'
import img1 from "@/public/Assets/Images/Articles/img2.jpg"
type Props = {}

export default function Trendy({}: Props) {
  return (
    <div>
 <h1 className='font-bold text-2xl text-center pt-20'>Trending Products</h1>
 <div className='relative left-60 pt-5 '>
  <Image src={img1} alt='' className='h-76 rounded-xl '/>
  <div className='border w-[300px] h-[270px] bg-gray-100 opacity-0 absolute top-[25] left-8  '>
 <div className='border border-red-500 px-4'>
 <h1>COLLECTION</h1>
 <h2 className='font-bold text-2xl'>Royal Charm</h2>
 <p>Indroducing our news women's <br />Watch collection, which embodies <br />elegance,sophistication and impeccables style</p>
 <button className='border border-black rounded-xl px-4 mt-8'>SHOP NOW</button>
 </div>
 </div>
 </div>
    </div>
  )
}
import React from 'react'
import Image from 'next/image'
import img1 from "@/public/Assets/Images/Articles/img2.jpg"
import img2 from "@/public/Assets/Images/Articles/img1.jpg"
import Button from './Button'
import img3 from "@/public/Assets/Images/Articles/5980_1AR_001_1fd5e23d-5dde-4b16-8482-f7ae98c4f58f.jpg"
import img4 from "@/public/Assets/Images/Articles/26510OR.OO.1220OR.01.jpg"
import img5 from "@/public/Assets/Images/Articles/5980_1AR_001_1fd5e23d-5dde-4b16-8482-f7ae98c4f58f.jpg"
import img6 from "@/public/Assets/Images/Articles/26510OR.OO.1220OR.01.jpg"
import { Montserrat } from 'next/font/google'
const mont = Montserrat({ subsets: ['latin'] })
export default function () {
 
  return (
    
    <div className=' px-35'>
       
      <h1 className='text-center font-bold text-2xl'>About</h1>
    <div className='flex gap-12 mt-10'>
    <div className=' flex flex-col w-[600px] h-[700px] '>
      <p>LuxTime is a young.fast-growing company based in the heart of London. <br />
        Founded in 2021.LT was born from a passion for redefining the way people <br />
        see watche - not just as timkeepers,but as bold fashion statements.</p>

        <div className='relative  h-[600px] rounded-md overflow-hidden mt-4'>
        <Image src={img1} className='h-full w-full' alt='img1'/>
        </div>

    </div >
    <div className='flex flex-col w-[350px] gap-25'>
<div>
<div className='rounded-xl   h-[400px] overflow-hidden'>
  <Image src={img2} alt='img2'className='w-full h-full'/>
</div>
<p className='mt-5'>Whether you're dressing up or keepind it <br />casual.LuxTime is here to make sure you <br />do it in style.</p>

</div>
<Button/>
    </div>
 </div>

    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import img1 from '@/public/Assets/Images/Articles/Montre4.jpg'
import img2 from '@/public/Assets/Images/Articles/Montre5.jpg'
import img3 from '@/public/Assets/Images/Articles/Montre6.jpg'
import img4 from '@/public/Assets/Images/Articles/Montre7.jpg'

export default function Articles() {
  return (
    <div className='flex flex-col sm:flex-row gap-10 mt-20 sm:px-40'>
        <div>
            <h1 className='text-3xl text-center   sm:text-2xl font-bold sm:mr-56'>New Articles</h1>
            <div className='flex gap-4 pt-2'>
                <Image src={img1} alt='Montre4' className='h-40 w-30 rounded-xl object-cover'/>
                <div>
                <h1>TIPS</h1>
                <p className='mt-1 font-bold'>How to Choose the <br />Perfect Watch for Any <br />Occasion?</p>
                <p className='mt-4'>James Smith</p>
                <p>December 18,2024</p>
                </div>
            </div>
            <div className='flex gap-4'>
        <Image src={img2} alt='Montre5' className='h-40 w-30 rounded-xl mt-4 object-cover'/>
               <div className='mt-4'>
                <h1 className='mt-1'>GUIDE</h1>
                <p className='font-bold'>How to Care For Your <br />Watch: Tips for <br />Maintenance and Storage</p>
                <p className='mt-4'>Michael Brown</p>
                <p>October 2,2024</p>
                 </div> 
        </div>
        </div>
        
        <div className='flex gap-4 '>
            <Image src={img3} alt='Montre6' className='h-80 w-60 rounded-xl'/>
            <div className='mt-10'>
             <p className='text-center'>50% off today</p>
            <Image src={img4} alt='Montre7' className='h-56 w-56 rounded-xl '/>
            </div>
        </div>
    </div>
  )
}

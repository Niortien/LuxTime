import React from 'react'
import Image from 'next/image'
import img1 from '@/public/Assets/Images/Articles/shopping-bag.png'
import img2 from '@/public/Assets/Images/Articles/world-wide-web.png'
import img3 from'@/public/Assets/Images/Articles/326933ch-removebg-preview (1).png'
import img4 from'@/public/Assets/Images/Articles/down.png'
import Button from './Button'

export default function Header() {
  return (
    <div >
<nav  className='relative z-10 overflow-hidden'>
<div className='flex justify-around items-center pt-2 '>
<div className='flex gap-8'>
<a href="" >Home</a>
<a href="">Collection</a>
<a href="">About</a>
<a href="">Contacts</a>
</div>
<h1 className='relative left-[-150px] text-2xl'>LuxTime</h1>
<div className='flex gap-2'>
<Image src={img1} alt='iconshooping' className='h-6 w-6'/>
<Image src={img2} alt='iconworldweb' className='h-4 w-4 mt-1'/>
<p>Eng</p>
<Image src={img4} alt='icondown' className='h-4 w-4 mt-1'/>

</div>
</div>
<div className='flex justify-between px-[150px] '>
    <div>
    <h1 className='text-4xl font-bold  mt-[150px] '>Feel the Time. <br />Dedine Your Style. </h1>
    <h2>Luxury in every detail,precision in every tick. </h2>
    </div >
    <Image src={img3} alt='montre1' className='bg-opacity-5 relative h-[400px] w-[250px] mt-[100px] left-[-100px]'/>
</div>
<div className=" absolute z-[-2] top-0 h-[590px] bottom-40 right-0 w-[915px] bg-[#F9F5F0] ">

</div>

<Button/>

</nav>
<button></button>
    </div>
  )
}
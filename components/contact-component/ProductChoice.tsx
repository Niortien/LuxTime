import Image from 'next/image';
import React from 'react';
import img12 from "@/public/Assets/Images/Articles/montre-homme--festina11-removebg-preview.png";
import { Input } from '../ui/input';
import { Button } from '../ui/Button';
import useContent from '@/app/contact/useContent';

const ProductChoice = () => {
    const{currentImage,handleCangeImage}=useContent()
    return (
        <div className='sm:w-[45%] sm:h-96'>
           <div className='  ' >
         <div className='flex sm:justify-between h-28 sm:items-center '>
         <div className='relative h-16  w-20 bg-gray-200 rounded-2xl'>
            <Image src={currentImage} alt='produt' className='h-full w-full'/>
          </div>
          <span>Rolex-DateJust</span>
          <span>$123356</span>
         </div>

         <div  className='flex sm:justify-between h-28 sm:gap-10 sm:items-center '>
            <Input className='border border-gray-500'/> 
            <Button>Apply</Button>
         </div>

         <div className='flex sm:justify-between h-28 sm:gap-10 sm:items-center ' >
            <span>Subtotal</span>
            <h4>$1324567</h4>
         </div>

         <div className='flex sm:justify-between h-28 sm:gap-10 sm:items-center ' >
            <span>Shipping</span>
            <span>Enter shipping address</span>
         </div>

         <div className='flex sm:justify-between h-28 sm:gap-10 sm:items-center '>
            <span>Estimated taxes</span>
            <span>$0</span>
         </div>
         <div className='flex sm:justify-between h-28 sm:gap-10 sm:items-center '>
            <span>Total</span>
            <span>$6789</span>
         </div>
           </div>
        </div>
    );
}

export default ProductChoice;

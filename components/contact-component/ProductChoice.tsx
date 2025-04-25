import Image from 'next/image';
import { Input } from '../ui/input';
import { Button } from '../ui/Button';
import useContent from '@/app/(default)/contact/[...detail]/useContent';
import { Watch } from '@/types/watch';

const ProductChoice = ({ montre }: { montre: Watch }) => {
   
    return (
        <div className='sm:w-[45%] sm:h-96 w-[100%] px-10 '>
           <div className=' flex flex-col gap-10  ' >
         <div className='flex justify-between h-28 items-center sm:flex-row gap-1 pt-4  '>
         <div className='relative sm:h-20  sm:w-24 w-[40%]    bg-gray-200 rounded-2xl'>
            <Image src={montre.pathi} alt='produt' height={200} width={200} className='h-full object-contain w-full'/>
          </div>
          <span className='font-bold font-title text-xl'> {montre.name}</span>
          <span className='font-bold font-title text-xl'> {montre.serie} </span>
         </div>

        <div className=''>
        <div  className='flex sm:justify-between h-28  gap-5 sm:items-center pt-10 '>
            <Input className='border border-gray-500'/> 
            <Button>Apply</Button>
         </div>

         <div className='flex justify-between h-28 sm:gap-10 sm:items-center ' >
            <span className='font-bold font-title text-xl'>Subtotal</span>
            <h4>$1324567</h4>
         </div>

         <div className='flex justify-between h-28 sm:gap-10 sm:items-center ' >
            <span className='font-bold font-title text-xl '>Shipping</span>
            <span >Enter shipping address</span>
         </div>

         <div className='flex justify-between h-28 sm:gap-10 sm:items-center '>
            <span className='font-bold font-title text-xl'>Estimated taxes</span>
            <span>$0</span>
         </div>
         <div className='flex justify-between h-28 sm:gap-10 sm:items-center '>
            <span className='font-bold font-title text-xl'>Total</span>
            <span> {montre.price} </span>
         </div>
        </div>
           </div>
        </div>
    );
}

export default ProductChoice;

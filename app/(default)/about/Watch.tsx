import Image, { StaticImageData } from 'next/image';
import React from 'react';

export  interface IWatch{
    id:number;
    pathi:StaticImageData;
    marque:string 
  } 
const Watch = (data:IWatch) => {
 
    return (
        <div className='realtive sm:w-[] h-80  rounded-2xl  bg-black/30  backdrop-blur-3xl'>
            
                <Image src={data.pathi} alt={`${data.marque}`} className='w-full h-full object-contain relative' />

           
            
                <span className='absolute  bottom-10 left-10 text-4xl font-body text-white font-medium'>
                    {data.marque}
                </span>
            
        </div>
    );
}

export default Watch;

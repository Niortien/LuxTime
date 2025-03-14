import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@/components/ui/Button';
 export interface IHouse{
    id:number;
    pathi:StaticImageData;
    marque:string;
    dateHouse:string;
    telephone:string;
 }
const House = ({ id, pathi, marque, dateHouse, telephone }:IHouse) => {
    return (
        <div className='flex  sm:flex-col flex-col  rounded-2xl   sm:justify-center sm:items-center sm:px-0 px-2 pt-5 sm:gap-0 gap-3 '>
            <div className='sm:h-56 w-[100%] sm:w-[60%] h-56'>
            <Image src={pathi}  alt='iss'className='w-full h-full rounded-2xl object-cover ' />
            </div>
            <div className='font-body flex flex-col'>
                <p> {marque} </p>
                <p> {dateHouse} </p>
                <span> {telephone} </span>
                <div>
                <Button className='bg-white text-black border border-black w-[100%] text-center sm:w-36 hover:bg-white cursor-pointer ' >view map</Button>
                </div>
            </div>
        </div>
    );
}

export default House;

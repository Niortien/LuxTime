"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from "@/public/Assets/Images/Articles/img1.jpg";
import { log } from 'console';
const Beforefooter = () => {
    const [liste,setListe]= useState(0) 
    let nom:string="issa";

    console.log(nom);
    console.log(liste)
    
    return (
        <div className='border border-amber-400 flex '>
            
            <div className='border border-blue-400 '>
        <Image src={img1} alt={`img1`}/>
        {liste}
            </div >
            <div className='border border-red-400'>
 <button  className='cursor-pointer' onClick={()=> setListe(liste+1)}>increase </button>
            </div>
        </div>
    );
}

export default Beforefooter;

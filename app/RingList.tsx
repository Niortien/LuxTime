import React from 'react'
import Image from 'next/image'
import img1 from "@/public/Assets/Images/Articles/Montre2.jpg"
import img2 from "@/public/Assets/Images/Articles/Montre3.jpg"
import Ring from './Ring'

export default function RingList() {
    const product:IRing[]=[
        {
            id:1,
            pathi:img1,
            pathi0:"Golden Queen",
            pathi1:"Get 20% off with our code Gold20"
        },
        {
            id:2,
            pathi:img2,
            pathi0:"Mystic Cleopatra",
            pathi1:"say yes with 50% off"
        }

    ]
  return (
    <div className='flex justify-center gap-5  '>
        {
            product.map((props)=> {
                return <div key={props.id}>
                    <Ring data={props}/>
                </div>
            }
        
        ) }
    </div>
  )
}

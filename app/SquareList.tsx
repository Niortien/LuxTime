import React from 'react'
import Image from 'next/image'
import img1 from "@/public/Assets/Images/Articles/5980_1AR_001_1fd5e23d-5dde-4b16-8482-f7ae98c4f58f-removebg-preview.png"
import img2 from "@/public/Assets/Images/Articles/26510OR.OO.1220OR.01-removebg-preview.png"
import img3 from "@/public/Assets/Images/Articles/326933ch-removebg-preview (1).png"
import Square from './Squares'
export default function SquareList() {
    const product:ISquare[]=[
{
    id:1,
    pathi:img1,
    marque:"Hamilton",
    edition:"JazzMaster Open Auto Heart",
    price:1100.00
},
{
    id:2,
    pathi:img2,
    marque:"Hamilton",
    edition:"Khaki Field Expedition 37mm",
    price:1440.00
},
{
    id:3,
    pathi:img3,
    marque:"Hamilton",
    edition:"Khaki Aviation Pilot  Day Date",
    price:1360.00
},
{
    id:4,
    pathi:img3,
    marque:"Hamilton",
    edition:"Khaki Aviation Pilot  Day Date",
    price:1360.00
}
    ]

  return (

    <div className='flex mt-10  flex-col'>
        <h1 className='text-center font-bold text-xl'>New Collection</h1>
        <div className='flex  justify-around  mt-10'>
        {product.map((items)=> {
        return <div key={items.id}>
        <Square data={items}/>
        </div>
        }
        )}
        </div>
    </div>
  )
}

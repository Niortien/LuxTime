import React from 'react'
import Image from 'next/image'
import img1 from "@/public/Assets/Images/Articles/26510OR.OO.1220OR.01-removebg-preview.png"
import img2 from "@/public/Assets/Images/Articles/326933ch-removebg-preview (1).png"
import img3 from "@/public/Assets/Images/Articles/26510OR.OO.1220OR.01-removebg-preview.png"

import Squares, { ISquare } from './Squares'

export default function SquareList() {
  const product:ISquare[]=[
    {id:1,
    pathi:img1,
    marque:"Hamilton",
    serie:"Jazzmaster Open Heart Auto",
    price:1100.00

  },
  {id:2,
    pathi:img2,
    marque:"Hamilton",
    serie:"Khaki Aviation Pilot Day Date",
    price:1360.00
  },
  {id:3,
    pathi:img3,
    marque:"Hamilton",
    serie:"Khaki Filed Expedition 37mm",
    price:100.00
  },
  ]
    return (
    <div className='flex justify-around pt-15'>
      {product.map((items)=> {
        return <div key={items.id}>
            <Squares data={items}/>
        </div>
        }
        )}
    </div>
  )
}

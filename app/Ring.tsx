import React from 'react'
import { Interface } from 'readline'
import Image from 'next/image'

export interface IRing{
    data:{
        id:number
        pathi:string
        pathi0:string
        pathi1:string
    }
}
export default function Ring ({data}:IRing) {
  return (
    <div>
        <div>
            <div>
                <Image src={data.pathi} alt=''/>
            </div>
            <div>
                <p>{data.pathi0}</p>
                <p>{data.pathi0}</p>
                <p>{data.pathi1}</p>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import Sort1 from './Sort1'
import Sort2 from './Sort2'
import Sort3 from './Sort3'
import Sort4 from './Sort4'
import Sort5 from './Sort5'
import Sort6 from './Sort6'
import Sort7 from './Sort7'

export default function SortList() {
  return (
    <div>
        <div className='flex flex-col gap-5'>
        <Sort1/>
        <Sort2/>
        <Sort3/>
        <Sort4/>
        <Sort5/>
        <Sort6/>
        <Sort7/>
        </div>
        
    </div>
  )
}

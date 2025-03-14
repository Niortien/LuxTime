import React from 'react'
import Navbar from '@/components/common/Navbar';
import Watches from '@/app/collection/Watches';
import SortList from './SortList';

export default function Collection() {
  return (
    <div>
          <Navbar/>
      <div className='flex sm:gap-10'> <SortList/> <Watches/></div>
    </div>
  )
}

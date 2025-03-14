import React from 'react';
import Navbar from '@/components/common/Navbar';
import HouseList from './HouseList';
import Beforefooter from '../about/Beforefooter';
const OurStore = () => {
    return (
        <div>
            <Navbar/>
            <HouseList></HouseList>
            <div className='pt-20'>
            <Beforefooter></Beforefooter> 
            </div>
        </div>
    );
}

export default OurStore ;

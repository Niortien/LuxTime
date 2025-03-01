import React from 'react';

const Footer = () => {
    return (
        <footer className='flex  flex-col sm:flex-row  sm:justify-between bg-primary-50 sm:mt-10 mt-5 max-w-screen-xl mx-auto  '>
            <div className=" h-10 sm:mt-10" >
                <h1 className='font-title text-4xl'>LuxTime</h1>
            </div>
            <div className=" px-10">
                <h1 className='font-title text-xl font-bold sm:text-start text-center '>About</h1>
                <div className='  sm:w-48 h-48 '>
                    <ul className='gap-3 flex flex-col items-center  justify-center  sm:items-start '>
                   <li> <a href="">Design</a></li>
                   <li> <a href="">Stores</a></li>
                   <li> <a href="">Careers</a></li>
                    <li><a href="">Become a partner</a></li>
                    <li><a href=""></a></li>
                    </ul>
                </div>
            </div>
            <div className="">
            <h1 className='font-title text-xl font-bold sm:text-start text-center '>Collection</h1>
                <div className='  sm:w-48 h-48'>
                    <ul  className=' gap-3 flex flex-col items-center justify-center   sm:items-start'>
                   <li> <a href="">Watch</a></li>
                   <li> <a href="">Gift boxes</a></li>
                   <li> <a href="">Gift guide </a></li>
                    
                    </ul>
                </div>

            </div>
            <div className="">

            <h1 className='font-title text-xl font-bold  sm:text-start text-center '>Support</h1>
                <div className=' sm:w-56 h-48 px'>
                    <ul className='gap-3 flex flex-col items-center justify-center  sm:items-start '>
                   <li> <a href="">Privacy policy</a></li>
                   <li> <a href="">Customer service </a></li>
                   <li> <a href="">Careers</a></li>
                    <li><a href="">Terms and condition </a></li>
                    <li><a href="">Frquently asked questions </a></li>
                    </ul>
                </div>
            </div>
            <div className="">

            <h1 className='font-title text-xl font-bold sm:text-start text-center '>Contact</h1>
                <div className=' sm:w-48 h-48'>
                    <ul className='gap-3 flex flex-col sm:items-start items-center justify-center '>
                   <li> <a href="">(310) 634-7245</a></li>
                   <li> <a href="">info@LuxTime</a></li>
                   <li> <a href="">info@LuxTime</a></li>
                   
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

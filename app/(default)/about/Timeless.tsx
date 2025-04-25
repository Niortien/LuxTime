import React from 'react';
import WatchList from './WatchList';
const Timeless = () => {
    return (
        <div className='  flex sm:flex-col flex-col py-10 '>
            <div className=' sm:w-[70%] sm:self-center'>
            <h1 className="text-4xl  text-center"> Timeless Collections </h1>
            
            <p className='text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              illum facere dicta explicabo, quo unde sapiente necessitatibus
              vero! Rerum minima aspernatur repellat pariatur totam magni cum?
              Excepturi, Autem illum facere dicta explicabo, quo unde sapiente
             
            </p>
            
            </div>
            <div className='sm:flex sm:justify-center py-8'>
            <WatchList></WatchList>
            </div>
        </div>
    );
}

export default Timeless;

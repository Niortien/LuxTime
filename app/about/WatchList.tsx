import React from 'react';
import img1 from "@/public/Assets/Images/Articles/26510OR.OO.1220OR.01-removebg-preview.png";
import img2 from "@/public/Assets/Images/Articles/326933ch-removebg-preview (1).png";
import img3 from "@/public/Assets/Images/Articles/26510OR.OO.1220OR.01-removebg-preview.png";
import img4 from'@/public/Assets/Images/Articles/326933ch-removebg-preview (1).png'
import Watch, { IWatch } from './Watch';
const WatchList = () => {

    const watchTable: IWatch[] = [
        {
          id: 1,
          pathi: img1,
          marque: "Rolex",
          
        },
        {
            id: 2,
            pathi: img2,
            marque: "Patek Philippe",
        },
        {
            id: 3,
            pathi: img3,
            marque: "Cartier",
        },
        ,
        {
            id: 4,
            pathi: img2,
            marque: "Tissot",
        }
        ,
        {
            id: 5,
            pathi: img1,
            marque: "",
        }
        ,
        {
            id: 6,
            pathi: img3,
            marque: "Tag heuer",
        },

      ];
    return (
        <div className='grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-10 gap-5  sm:w-[70%] w-[100%] sm:px-0  px-3'>
            {watchTable.map((items) => {
                    return (
                      <div key={items.id}>
                        <Watch {...items} />
                      </div>
                    );
                  })}
        </div>
    );
}

export default WatchList;

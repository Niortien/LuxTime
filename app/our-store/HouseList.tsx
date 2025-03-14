import React from 'react';
import House, { IHouse } from './House';
import img2 from "@/public/Assets/Images/House/Modern Open-Concept Living with Industrial Charm.jpg";
import img3 from "@/public/Assets/Images/House/Décoration salon moderne - Silia Studio.jpg";
import img1 from "@/public/Assets/Images/House/téléchargement (1).jpg";
import img4 from "@/public/Assets/Images/House/téléchargement.jpg";
import { div } from 'framer-motion/client';
const HouseList = () => {
    const housse: IHouse[] = [
        {
          id: 1,
          pathi: img1,
          marque: "Toronto,Elm Street 9 ,Oakland City LuxuryWatches",
          dateHouse: "Mont-Sat at 10.00-20.00",
          telephone: "+1 416-658-5396",
        },
        {
            id: 2,
            pathi: img2,
            marque: "Toronto,Elm Street 9 ,Oakland City LuxuryWatches",
            dateHouse: "Mont-Sat at 10.00-20.00",
            telephone: "+1 416-658-5396",
          },
          {
            id: 3,
            pathi: img3,
            marque: "Toronto,Elm Street 9 ,Oakland City LuxuryWatches",
            dateHouse: "Mont-Sat at 10.00-20.00",
            telephone: "+1 416-658-5396",
          },
          {
            id: 4,
            pathi: img4,
            marque: "Toronto,Elm Street 9 ,Oakland City LuxuryWatches",
            dateHouse: "Mont-Sat at 10.00-20.00",
            telephone: "+1 416-658-5396",
          },
      ];
    return (
        
             <div className="   grid sm:grid-cols-2 sm:grid-rows-2   sm:justify-around pt-15    " >
              
                  {housse.map((items) => {
                    return (
                      <div key={items.id} className='' >
                        <House {...items} />
                      </div>
                    );
                  })}
                </div>
        
    );
}

export default HouseList;

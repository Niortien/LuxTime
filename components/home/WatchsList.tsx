import React from 'react'
import Watchs, { IWatchs } from './Watchs';
import img1 from "@/public/Assets/Images/Articles/26510OR.OO.1220OR.01-removebg-preview.png"
import img2 from "@/public/Assets/Images/Articles/326933ch-removebg-preview (1).png"
import img3 from "@/public/Assets/Images/Articles/5980_1AR_001_1fd5e23d-5dde-4b16-8482-f7ae98c4f58f-removebg-preview.png"
export default function WatchsList() {
    const product: IWatchs[] = [
      {
        id: 1,
        pathi: img1,
       name: "",
        description: "",
        price:""
      },
      {
        id: 2,
        pathi: img2,
       name: "",
        description: "",
        price:""
      },
      {
        id: 3,
        pathi: img3,
       name: "",
        description: "",
        price:""
      },
    ];
    return (
      <div className=" ">
        {product.map((props) => {
          return (
            <div key={props.id} >
              <Watchs
                id={props.id}
                pathi={props.pathi}
                name={props.name}
                description={props.description}
                price={props.price}
              />
            </div>
          );
        })}
      </div>
    );
  }
  

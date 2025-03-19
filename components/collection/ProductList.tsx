import React from 'react'
import Product, { IWatchs } from './Product';
import img1 from "@/public/Assets/Images/Articles/montre-homme--festina1-removebg-preview.png";
import img2 from "@/public/Assets/Images/Articles/montre-homme--festina2-removebg-preview.png";
import img3 from "@/public/Assets/Images/Articles/montre-homme--festina3-removebg-preview.png";
import img4 from "@/public/Assets/Images/Articles/montre-homme--festina4-removebg-preview.png";
import img5 from "@/public/Assets/Images/Articles/montre-homme--festina5-removebg-preview.png";
import img6 from "@/public/Assets/Images/Articles/montre-homme--festina12-removebg-preview.png";
import img7 from "@/public/Assets/Images/Articles/montre-homme--festina6-removebg-preview.png";
import img8 from "@/public/Assets/Images/Articles/montre-homme--festina7-removebg-preview.png";
import img9 from "@/public/Assets/Images/Articles/montre-homme--festina8-removebg-preview.png";
import img10 from "@/public/Assets/Images/Articles/montre-homme--festina9-removebg-preview.png";
import img11 from "@/public/Assets/Images/Articles/montre-homme--festina10-removebg-preview.png";
import img12 from "@/public/Assets/Images/Articles/montre-homme--festina11-removebg-preview.png";

export default function ProductList() {
  const  article: IWatchs[] = [
        {
          id: 1,
          pathi: img1,
          name: "Tissot",
          description: "PowerMatic 80",
          serie: "38mm blue",
          price: "$1,750.00",
          
        },
        {
          id: 2,
          pathi: img2,
          name: "Tissot",
          description: "Chemin des",
          serie: "Tourelles Automatic",
          price: "$899.00",
        },
        {
          id: 3,
          pathi: img3,
          name: "Bulova",
          description: "Chemin des",
          serie: "Tourelles",
          price: "$1,150.00",
        },
        {
            id: 4,
            pathi: img4,
            name: "Tissot",
            description: "PowerMatic 80",
            serie: "38mm blue",
            price: "$1,750.00",
          },
          {
            id: 5,
            pathi: img5,
            name: "Tissot",
            description: "Chemin des",
            serie: "Tourelles Automatic",
            price: "$899.00",
          },
          {
            id: 6,
            pathi: img6,
            name: "Bulova",
            description: "Chemin des",
            serie: "Tourelles",
            price: "$1,150.00",
          },
          {
            id: 7,
            pathi: img7,
            name: "Tissot",
            description: "PowerMatic 80",
            serie: "38mm blue",
            price: "$1,750.00",
          },
          {
            id: 8,
            pathi: img8,
            name: "Tissot",
            description: "Chemin des",
            serie: "Tourelles Automatic",
            price: "$899.00",
          },
          {
            id: 9,
            pathi: img9,
            name: "Bulova",
            description: "Chemin des",
            serie: "Tourelles",
            price: "$1,150.00",
          },
          {
            id: 10,
            pathi: img10,
            name: "Tissot",
            description: "PowerMatic 80",
            serie: "38mm blue",
            price: "$1,750.00",
          },
          {
            id: 11,
            pathi: img11,
            name: "Tissot",
            description: "Chemin des",
            serie: "Tourelles Automatic",
            price: "$899.00",
          },
          {
            id: 12,
            pathi: img12,
            name: "Bulova",
            description: "Chemin des",
            serie: "Tourelles",
            price: "$1,150.00",
          },
      ];
      
  return (
    <>
 <div className='grid grid-row-4grid grid-cols-3 gap-15  '>
    {article.map((props) => {
             return (
               
               <div key={props.id} className='' >
                 
                 <Product
                   id={props.id}
                   pathi={props.pathi}
                   name={props.name}
                   description={props.description}
                   serie={props.serie}
                   price={props.price}
                 />
               </div>
             );
           })}
 </div>
    </>
  )
}

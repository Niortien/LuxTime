import React from "react";
import img1 from "@/public/Assets/Images/Articles/Montre2.jpg";
import img2 from "@/public/Assets/Images/Articles/Montre3.jpg";
import Ring, { IRing } from "@/components/ui/Ring";

export default function RingList() {
  const product: IRing[] = [
    {
      id: 1,
      pathi: img1,
      pathi0: "Golden Queen",
      pathi1: "Get 20% off with our code Gold20",
      pathi2:"redeem Code"
    },
    {
      id: 2,
      pathi: img2,
      pathi0: "Mystic Cleopatra",
      pathi1: "say yes with 50% off",
      pathi2:"views Products"
    },
  ];
  return (
    <div className="flex sm:justify-around gap-5 flex-col sm:flex-row  sm:px-18  ">
      {product.map((props) => {
        return (
          <div key={props.id} >
            <Ring
              id={props.id}
              pathi={props.pathi}
              pathi0={props.pathi0}
              pathi1={props.pathi1}
              pathi2={props.pathi2}
            />
          </div>
        );
      })}
    </div>
  );
}

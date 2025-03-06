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
    },
    {
      id: 2,
      pathi: img2,
      pathi0: "Mystic Cleopatra",
      pathi1: "say yes with 50% off",
    },
  ];
  return (
    <div className="flex justify-center   ">
      {product.map((props) => {
        return (
          <div key={props.id}>
            <Ring
              id={props.id}
              pathi={props.pathi}
              pathi0={props.pathi0}
              pathi1={props.pathi1}
            />
          </div>
        );
      })}
    </div>
  );
}

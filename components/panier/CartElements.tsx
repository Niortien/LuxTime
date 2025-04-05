"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/public/Assets/Images/Articles/montre-homme--festina6-removebg-preview.png";
import { Button } from "../ui/Button";
import { Watch } from "@/types/watch";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CartElements = ({ id, name, pathi, price, serie }: Watch) => {
  const [qty, setQty] = useState(1);
 const router = useRouter();
   ;
  const setQuantity = (value: 1 | -1) => {
    if (qty >= 1) {
      setQty(qty + value);
    }
  };
  console.log(qty);
  const handleClick = () => {
    router.push(`/contact/${id}`);
  }

  return (
    // Le panier est composé de 3 parties

    <div className="border border-black shadow-md rounded-md sm:px-4 pt-5">
      <div className="flex sm:justify-between">
        {" "}
        {/* cette partie est la première partie */}
        <div className="flex sm:flex-col gap-5">
          <span className="font-bold">Product</span>

          <div className="w-20 h-20 relative ">
            <Image
              src={pathi}
              alt={`${name}`}
              height={200}
              width={200}
              className="w-full h-full object-contain "
            />
          </div>
        </div>
        <div className="flex sm:flex-col gap-5">
          <span className="font-bold ">Name</span>

          <span> {name} </span>
        </div>
        <div className="flex sm:flex-col gap-5">
          <span className="font-bold">Qty</span>

          <div>
            <Button onClick={() => setQuantity(1)}>+</Button>
            <span> {qty} </span>
            <Button onClick={() => setQuantity(-1)}>-</Button>
          </div>
        </div>
        <div className="flex sm:flex-col gap-5">
          <span className="font-bold">Price</span>

          <span> {price} </span>
        </div>
        <div className="flex sm:flex-col gap-5">
          <span className="font-bold">Remove</span>

          <span className="px-2 py-2 bg-primary-200 rounded-2xl flex justify-center items-center cursor-pointer">
            {" "}
            X{" "}
          </span>
        </div>
      </div>

      <div className=" border-2 border-blue-300 ">
        {" "}
        {/* cette partie est la deuxième partie */}
        <div className="flex justify-end gap-40">
          <span>Total</span>
          <span className="pr-4"> {price * qty} </span>
        </div>
      </div>

      {/* cette partie est la troisème partie */}
      <div className="flex sm:justify-end gap-20 pt-3">
        <Button>Update Cart</Button>
        <Button onClick={()=>handleClick()}> Check out</Button>
      </div>
    </div>
  );
};

export default CartElements;

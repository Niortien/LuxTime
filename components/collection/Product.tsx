"use client";
import { Watch } from "@/types/watch";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function Product({
  id,
  pathi,
  name,
  description,
  serie,
  price,
}: Watch) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/collection/${id}`);
  };

  return (
    <div className="transition-transform duration-300 ease-in-out cursor-pointer hover:scale-105    rounded-2xl border border-gray-300 ">
      <div className=" " key={id} onClick={() => handleClick()} >
        <div className="h-60 w-56 bg-gray-200 rounded-md relative  ">
          <Image
            src={pathi}
            alt="img2"
            width={300}
            height={300}
            className="w-full h-full object-contain "
          />
        </div>
        <div className="text-center">
          <h1 className="">{name} </h1>
          <p> {description} </p>
          <p>{serie}</p>
          <h6 className=""> {price} </h6>
          <div className="flex gap-3 "></div>
        </div>
      </div>
    </div>
  );
}

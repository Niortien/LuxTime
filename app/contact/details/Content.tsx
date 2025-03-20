"use client"
import React from "react";
import img8 from "@/public/Assets/Images/Articles/montre-homme--festina7-removebg-preview.png";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
const Content = () => {
  const routeur=useRouter()
    const handlclick= ()=> routeur.push("/panier")
  return (
    <div>
      <div className=" sm:flex sm:gap-2.5 pt-10 px-20">
        <div className="border border-amber-300 cursor-pointer ">
          <Image src={img8} alt="coco" />
        </div>
        <div className="flex sm:flex-col gap-10">
          <div className="flex sm:gap-2.5 rounded-2xl shadow-sm gap-5">
            <div className="h-36 w-36 relative rounded-xl shadow-sm cursor-pointer">
              <Image src={img8} alt="coco" className="h-full w-full" />
            </div>
            <div className="flex sm:flex-col sm:gap-8">
              <h1>Rolex -Datejust</h1>
              <span>etoile</span>
              <span>Color</span>
            </div>
          </div>

          <div className="flex sm: rounded-xl shadow-sm gap-5">
            <div className="h-36 w-36 relative rounded-xl shadow-sm cursor-pointer ">
              <Image src={img8} alt="coco" className="h-full w-full" />
            </div>
            <div className="flex sm:flex-col sm:gap-8">
              <h1>SKU YT55665T6</h1>
              <div className="flex border-red-300 border-2  gap-2">
              <span>quantity  </span> <div className="w-8 border border-black text-center rounded-sm"> 1
              </div>
              </div>
              <span>$566446</span>
            </div>
          </div>

          <div className="flex sm: rounded-sm  gap-5 shadow-xl">
            <div className="h-36 w-36 relative  shadow-sm cursor-pointer">
              <Image src={img8} alt="coco" className="h-full w-full" />
            </div>
            <div className="flex sm:flex-col sm:gap-8">
              <Button className="w-36 cursor-pointer" onClick={handlclick} >Add to cart</Button>
              <div className="flex gap-5">
                <Button>Description</Button> <Input className="border border-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

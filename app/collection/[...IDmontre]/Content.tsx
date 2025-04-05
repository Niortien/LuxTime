"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Watch } from "@/types/watch";
import { BookHeartIcon, ChevronLeft, FileHeartIcon, HeartCrackIcon, HeartHandshakeIcon, HeartIcon, HeartPulseIcon, Star, StarHalf } from "lucide-react";
import { useFinc } from "@/Store/Store";

const Content = ({ watch }: { watch: Watch }) => {
  const routeur = useRouter();

  // routeur.push("/panier")
  const {addToCart}=useFinc()
  const handlclick = () => addToCart(watch) ; 

  return (
    <div className=" flex  sm:justify-center sm:items-center flex-col p-5  mt-10 mb-10 bg-semiwhite">
      <div className="  w-full ">
      <Button
        onClick={() => routeur.back()}
        variant="outline"
        className="flex gap-1 bg-primary-300 text-white rounded-full  px-4 py-2 mt-5 ml-5"
      >
        <ChevronLeft className="mr-2" />
        <span className="text-sm">Go back</span>
      </Button>
      </div>
      <div className=" flex gap-10 sm:gap-20 pt-10 px-20 sm:flex-row flex-col ">
        <div className=" cursor-pointer sm:justify-center sm:items-center shadow ">
          <Image
            src={watch.pathi}
            alt="coco"
            width={300}
            height={300}
            className=" object-center"
          />
        </div>
        <div className="flex sm:flex-col gap-5 flex-col">
          <div className="flex sm:gap-2.5   items-center gap-5 shadow-sm ">
            <div className="h-36 sm:w-36 relative  shadow-sm cursor-pointer scale-y-[1]">
              <Image
                src={watch.pathi}
                alt="coco"
                width={300}
                height={300}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex sm:flex-col sm:gap-8">
              <h1>{watch.name}</h1>
              <div className="flex gap-2">
                <Star className="stroke-primary-500 fill-primary-200" />
                <Star className="stroke-primary-500 fill-primary-200" />
                <Star className="stroke-primary-500 fill-primary-200" />
                <Star className="stroke-primary-500 fill-primary-200" />{" "}
                <StarHalf className="stroke-primary-500 fill-primary-200" />{" "}
              </div>
              <span>Color</span>
            </div>
          </div>

          <div className="flex sm:  shadow-sm gap-5   items-center">
            <div className="h-36 sm:w-36 relative rounded-xl shadow-sm cursor-pointer scale-x-[1] hover:scale-x-100  border">
              <Image
                src={watch.pathi}
                alt="coco"
                width={300}
                height={300}
                className="h-full w-full  object-contain"
              />
            </div>
            <div className="flex sm:flex-col sm:gap-8">
              <h1>{watch.serie}</h1>
              <div className="flex   gap-2">
                <span>quantity </span>{" "}
                <div className="w-8 border border-black text-center rounded-sm">
                  {" "}
                  1
                </div>
              </div>
              <span>{watch.price}</span>
            </div>
          </div>

          <div className="flex sm: rounded-sm  gap-5 w-full shadow-sm items-center">
            <div className="h-36 w-36 relative  shadow-sm cursor-pointer scale-x-[-1] hover:scale-x-105">
              <Image
                src={watch.pathi}
                alt="coco"
                width={300}
                height={300}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex sm:flex-col sm:gap-8 flex-col gap-4 ">
              <div className="border border-green-400 gap-3 flex sm:justify-between w-52">
              <Button className="w-36 cursor-pointer bg-black" onClick={handlclick}>
                Add to cart
              </Button>
              <HeartIcon />
              </div>
        
              
              <div className="flex gap-5">
                <Button>Description</Button>{" "}
                <Input className="border border-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

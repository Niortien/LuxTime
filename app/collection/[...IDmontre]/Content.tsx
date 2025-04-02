"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Watch } from "@/types/watch";
import { ChevronLeft, Star, StarHalf } from "lucide-react";

const Content = ({ watch }: { watch: Watch }) => {
  const routeur = useRouter();
  const handlclick = () => routeur.push("/panier");

  return (
    <div>
      <Button
        onClick={() => routeur.back()}
        variant="outline"
        className="flex gap-1 bg-amber-300 text-white rounded-full px-4 py-2 mt-5 ml-5"
      >
        <ChevronLeft className="mr-2" />
        <span className="text-sm">Go back</span>
      </Button>
      <div className=" sm:flex sm:gap-2.5 pt-10 px-20 sm:flex-row flex-col">
        <div className="border border-amber-300 cursor-pointer ">
          <Image
            src={watch.pathi}
            alt="coco"
            width={300}
            height={300}
            className=" object-contain"
          />
        </div>
        <div className="flex sm:flex-col gap-10">
          <div className="flex sm:gap-2.5 rounded-2xl shadow-sm gap-5">
            <div className="h-36 w-36 relative rounded-xl shadow-sm cursor-pointer">
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

          <div className="flex sm: rounded-xl shadow-sm gap-5">
            <div className="h-36 w-36 relative rounded-xl shadow-sm cursor-pointer ">
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
              <div className="flex border-red-300 border-2  gap-2">
                <span>quantity </span>{" "}
                <div className="w-8 border border-black text-center rounded-sm">
                  {" "}
                  1
                </div>
              </div>
              <span>{watch.price}</span>
            </div>
          </div>

          <div className="flex sm: rounded-sm  gap-5 shadow-xl">
            <div className="h-36 w-36 relative  shadow-sm cursor-pointer">
              <Image
                src={watch.pathi}
                alt="coco"
                width={300}
                height={300}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex sm:flex-col sm:gap-8">
              <Button className="w-36 cursor-pointer" onClick={handlclick}>
                Add to cart
              </Button>
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

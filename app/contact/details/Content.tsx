import React from "react";
import img8 from "@/public/Assets/Images/Articles/montre-homme--festina7-removebg-preview.png";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
const Content = () => {
  return (
    <div>
      <div className=" sm:flex sm:gap-2.5">
        <div>
          <Image src={img8} alt="coco" />
        </div>
        <div className="flex sm:flex-col gap-4">
          <div className="flex sm:gap-2.5 rounded-2xl shadow-sm">
            <div className="h-36 w-36 relative rounded-xl shadow-sm">
              <Image src={img8} alt="coco" className="h-full w-full" />
            </div>
            <div className="flex sm:flex-col sm:gap-8">
              <h1>Rolex -Datejust</h1>
              <span>etoile</span>
              <span>Color</span>
            </div>
          </div>

          <div className="flex sm: rounded-xl shadow-sm">
            <div className="h-36 w-36 relative rounded-xl ">
              <Image src={img8} alt="coco" className="h-full w-full" />
            </div>
            <div className="flex sm:flex-col sm:gap-8">
              <h1>SKU YT55665T6</h1>
              <span>quantity </span>
              <span>$566446</span>
            </div>
          </div>

          <div className="flex sm: rounded-sm shadow-xl">
            <div className="h-36 w-36 relative ">
              <Image src={img8} alt="coco" className="h-full w-full" />
            </div>
            <div className="flex sm:flex-col sm:gap-8">
              <Button className="w-36">Add to cart</Button>
              <div className="flex gap-5">
                <Button>Description</Button> <Input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

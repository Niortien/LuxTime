import React from "react";
import img3 from "@/public/Assets/Images/Articles/Montre6.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const Beforefooter = () => {
  return (
    <div>
      <div className="border border-red-500 flex sm:gap-5 sm:flex-row flex-col-reverse sm:justify-center gap-12 px-3 sm:px-0 ">
        <div className="flex gap-4 ">
          <Image src={img3} alt="Montre6" className="h-80 sm:w-96  rounded-xl" />
          
        </div>
        <div className="borde border-blue-500 sm:w-[45%] sm:p-6 sm:flex-col sm:flex flex sm:gap-3 gap-8 flex-col h-80 " >
            <h1 className="sm:text-4xl text-3xl">Enjoy 10% off  order- <br /> just for joining us,eh!</h1>
            <p>Sign up for our newsletter to receive your discount code  and stay updated  on the latest offers! </p>

         <form action="" className="flex justify-between  w-96 gap-3 ">

          <div>
              <input type="text" className="border-2 border-black rounded-md sm:w-60 sm:p-1.5 p-2.5  " placeholder="Your mail" />
          </div>
            <Button className="sm:w-48  sm:bg-primary-400 bg-white sm:text-white text-black border-2 border-black sm:border-none sm:p-1.5 p-5.5  ">Subcrible</Button>
         </form>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit officia eum nihil dolorum optio sit numquam</p>
        </div>
      </div>
    </div>
  );
};

export default Beforefooter;

"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/public/Assets/Images/Articles/img1.jpg";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const Marqueescription = () => {
  const router = useRouter();

  return (
    <section>
      <div className=" sm:flex sm:gap-0 gap-5 flex flex-col sm:flex-row sm:justify-around py-18 sm:px-1  ">
        <div className="sm:w-[45%] sm:px-12 px-10 py-10 ">
          <h1 className="text-4xl sm:px-0 px-1">
            {" "}
            where Precision Meets Sophistication
          </h1>
          <div className="flex flex-col gap-5 sm:px-0 px-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              illum facere dicta explicabo, quo unde sapiente necessitatibus
              vero! Rerum minima aspernatur repellat pariatur totam magni cum?
              Excepturi, Autem illum facere dicta explicabo, quo unde sapiente
              necessitatibus vero! Rerum minima aspernatur repellat pariatur
              totam magni cum? Excepturi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              illum facere dicta explicabo, quo unde sapiente necessitatibus
              vero! Rerum minima aspernatur repellat pariatur totam magni cum?
              Excepturi, Autem illum facere dicta explicabo, quo unde sapiente
              necessitatibus vero! Rerum minima aspernatur repellat pariatur
              totam magni cum? Excepturi, nulla iste. Distinctio!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              illum facere dicta explicabo, quo unde sapiente necessitatibus
              vero! Rerum minima aspernatur repellat pariatur totam magni cum?
              Excepturi, Autem illum .
            </p>
          </div>

          <Button
            onClick={() => {
              router.push("/about/team");
            }}
          >
            Go to Team page
          </Button>
        </div>

        <div className="sm:w-[45%]  relative  overflow-hidden sm:rounded-2xl rounded-2xl sm:px-0 px-3">
          <Image
            src={img1}
            alt="imgdes"
            className="w-full h-full object-contain ounded-2xl "
          />
        </div>
      </div>
    </section>
  );
};

export default Marqueescription;

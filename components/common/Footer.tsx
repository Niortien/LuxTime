"use client"
import Link from "next/link";

import React from "react";



export default function Footer() {
   
  return (
    <div className="mt-20 bg-primary-50 ">
      <div>
        <div className="flex flex-col sm:justify-center sm:flex-row gap-20 justify-center pt-20 ">
          
          <Link href={"/"} className="text-4xl  sm:text-3xl font-bold " >LuxTime</Link>
          <div>
           <Link href={"/about"} >About</Link>
            <p>Design</p>
            <Link href={"/our-store"} >Stores</Link>
            <p>Careers</p>
            <p>Become a patner</p>
          </div>
          <div>
          <Link href={"/collection"} >Collection</Link> <br />
          <Link href={"/collection"} >Watch</Link>
            <p>Gitf boxes</p>
            <p>Gitf guide</p>
          </div>
          <div>
            <h1>Support</h1>
            <p>Privacy policy</p>
            <p>Customer service</p>
            <p>Teams and Conditions</p>
            <p>Frequently asked questions</p>
          </div>
          <div>
          <Link href={"/contact"} >contact</Link>
            <p>(310) 634-7245</p>
            <p>Info@LuxTime</p>
          </div>
        </div>
      </div>
      <div className="mx-10 border-b-1 border-gray-400 sm:mx-24 mt-10"></div>
      <p className="ml-8 sm:ml-24  text-sm mt-3 text-center">© 2025 LuxTime.com,Inc,All Rights Reserved.</p>
    </div>
  );
}


import React from "react";



export default function Footer() {
  return (
    <div className="mt-20 bg-primary-50 ">
      <div>
        <div className="flex flex-col justify-center sm:flex-row gap-20 justify-center pt-20 ">
          <h1 className="text-4xl  sm:text-3xl font-bold ">LuxTime</h1>
          <div>
            <h1>About</h1>
            <p>Design</p>
            <p>Stores</p>
            <p>Careers</p>
            <p>Become a patner</p>
          </div>
          <div>
            <h1>Collection</h1>
            <p>Watch</p>
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
            <h1>Contacts</h1>
            <p>(310) 634-7245</p>
            <p>Info@LuxTime</p>
          </div>
        </div>
      </div>
      <div className="mx-10 border-b-1 border-gray-400 sm:mx-24 mt-10"></div>
      <p className="ml-8 sm:ml-24  text-sm mt-3">© 2025 LuxTime.com,Inc,All Rights Reserved.</p>
    </div>
  );
}

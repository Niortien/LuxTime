import React from "react";
import Navbar from "@/components/common/Navbar";
import HouseList from "@/components/our-store/HouseList";
import Beforefooter from "../about/Beforefooter";
const OurStore = async () => {
  return (
    <div>
      <Navbar />
      <HouseList />
      <div className="pt-20">
        <Beforefooter />
      </div>
    </div>
  );
};

export default OurStore;

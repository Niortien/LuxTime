import React from "react";
import HouseList from "@/components/our-store/HouseList";
import Beforefooter from "../about/Beforefooter";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
const OurStore = async () => {
  return (

    <div>
      <Link href={"/about"} className="pl-3" >   <Button> <ArrowLeft />Back 
      </Button> </Link>
      <HouseList />
      <div className="pt-20">
        <Beforefooter />
      </div>
    </div>
  );
};

export default OurStore;

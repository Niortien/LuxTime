import React from "react";
import HouseList from "@/components/our-store/HouseList";
import Beforefooter from "../about/Beforefooter";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
const OurStore = async () => {
  return (
    <div>
      <Link href={"/about"} >   <Button>go to about
      </Button> </Link>
      <HouseList />
      <div className="pt-20">
        <Beforefooter />
      </div>
    </div>
  );
};

export default OurStore;

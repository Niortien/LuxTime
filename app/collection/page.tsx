import React from "react";
import SortList from "@/components/collection/SortList";
import Watches from "@/components/collection/Watches";
import ProductList from "@/components/collection/ProductList";
export default async function Collection() {
  return (
    <>
      <div className="">
        <Watches />
        <div className="flex gap-10 mx-30">
          <SortList />
          <div>
         <ProductList/>
          </div>
         
          
        </div>
      </div>
    </>
  );
}

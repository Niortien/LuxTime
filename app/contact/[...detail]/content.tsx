"use client";
import React from "react";
import useContent from "./useContent";
import ProductChoice from "@/components/contact-component/ProductChoice";
import ProductForm from "@/components/contact-component/ProductForm";

import { Watch } from "@/types/watch";


export default   function Content({ montre }: { montre: Watch }) {
  // {contactWatches}:{ watchesTable: Watch[] }
 

   
  return (
    <div className="flex sm:gap-3 sm:flex-row flex-col-reverse ">
      {/* <p> Contact {count}</p>
      <p>{message}</p>
      <Button onClick={handleChangeCount}>Modifier</Button>
      <Input
        placeholder="Nom"
        value={q ?? ""}
        onChange={(e) => handleChangeSearchParams(e.target.value)}
      /> */}

   <ProductForm  />
    <ProductChoice montre={montre} />
    </div>
  );
}

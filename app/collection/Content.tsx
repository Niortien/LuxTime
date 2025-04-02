"use client";
import React from "react";

import SortList from "@/components/collection/SortList";
import Watches from "@/components/collection/Watches";
import ProductList from "@/components/collection/ProductList";
import { Watch } from "@/types/watch";

export default function Content({ watchesTable }: { watchesTable: Watch[] }) {

  return (
    <>
      <div className="">
        <Watches />
        <div className="flex gap-10 mx-30">
          <SortList />
          <div>
            <ProductList watches={watchesTable} />
          </div>
        </div>
      </div>
    </>
  );
}

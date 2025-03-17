import React from "react";
import SortList from "@/components/collection/SortList";
import Watches from "@/components/collection/Watches";

export default async function Collection() {
  return (
    <>
      <div className="flex sm:gap-10">
        <SortList /> <Watches />
      </div>
    </>
  );
}

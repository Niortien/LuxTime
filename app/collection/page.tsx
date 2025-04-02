import React from "react";
import { watches } from "@/data/watches";
import { Watch } from "@/types/watch";
import Content from "./Content";

export default async function Collection() {
  // const response = await fetch("https://api.vercel.app/blog");
  // const watchesTable: Watch[] = await response.json();

  const watchesTable: Watch[] = watches;

  return (
    <>
      <Content watchesTable={watchesTable} />
    </>
  );
}

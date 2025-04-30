import React from "react";
import { Watch } from "@/types/watch";
import Content from "./Content";

export default async function Collection() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/watch`);
  const watchesTable: Watch[] = await response.json();

  // const watchesTable: Watch[] = watches;

  return (
    <>
      <Content watchesTable={watchesTable} />
    </>
  );
}

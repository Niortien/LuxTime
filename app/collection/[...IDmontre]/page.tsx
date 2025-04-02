import React from "react";
import Content from "./Content";

import { watches } from "@/data/watches";
import NotFound from "@/app/not-found";

interface IProps {
  params: Promise<{ IDmontre: string }>;
}
export default async function Paiement({ params }: IProps) {
  const { IDmontre } = await params;
  // Data fetching
  // const response = await fetch(`https://api.vercel.app/blog/${IDmontre}`);
  // const watch: Watch[] = await response.json();

  const watch = watches.find((montre) => montre.id == Number(IDmontre));

  if (!watch) {
    return <NotFound/>;
  }

  return <Content watch={watch} />;
}

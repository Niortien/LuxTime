import React from "react";
import Content from "./Content";

interface IProps {
  params: Promise<{ montre: string }>;
}
export default async function Paiement({ params }: IProps) {
  const { montre } = await params;
  return <div>Paiement {montre}
  <Content></Content>
  
  </div>;
}

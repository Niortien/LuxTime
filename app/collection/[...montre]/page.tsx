import React from "react";

interface IProps {
  params: Promise<{ montre: string }>;
}
export default async function Paiement({ params }: IProps) {
  const { montre } = await params;
  return <div>Paiement {montre}</div>;
}

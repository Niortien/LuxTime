import React from "react";

export interface ICard {
  title: string;
  description: string;
  price?: number;
  color?: "blue" | "orange" | "red";
}

export default function Card({
  title,
  description,
  price,
  color = "blue",
}: ICard) {
  const ringColor = {
    blue: "ring-blue-500",
    orange: "ring-orange-500",
    red: "ring-red-500",
  }[color];

  const textColor = {
    blue: "text-blue-500",
    orange: "text-orange-500",
    red: "text-red-500",
  }[color];

  return (
    <div
      className={`max-w-sm shadow-xl ring ${ringColor} min-h-60 flex flex-col justify-between rounded-xl gap-8 p-4 md:p-8`}
    >
      {/* Header */}
      <h1 className="text-3xl font-semibold">{title}</h1>
      {/* Body */}
      <div className="flex flex-col gap-8">
        <p>{description}</p>
        {price ? (
          <p className={`text-5xl font-bold ${textColor} text-end`}>${price}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

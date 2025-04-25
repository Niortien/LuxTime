import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LuxTime Administration",
  description: "Back office",
  keywords: ["jewelry", "jewelry store", "jewelry online", "jewelry shop"],
};

export default function ConnexionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

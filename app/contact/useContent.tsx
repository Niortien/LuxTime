"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function useContent() {
  const [count, setCount] = useState<number>(0);
  const pathname = usePathname(); // Récupère le pathname ou itinéraire de l'URL actuelle
  const searchParams = useSearchParams(); // Récupère les paramètres de recherche de l'URL actuelle
  const router = useRouter();
  const handleChangeCount = () => {
    setCount(count + 1);
  };
  const handleChangeSearchParams = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", value);
    router.push(`${pathname}?${params.toString()}`);
  };
  const q = searchParams.get("q");
  const message = count < 10 ? "Contact" : "Contactez-nous";


  return { count, handleChangeCount, message, handleChangeSearchParams,q };
}

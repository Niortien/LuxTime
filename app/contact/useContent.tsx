"use client";

import { StaticImageData } from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import img12 from "@/public/Assets/Images/Articles/montre-homme--festina11-removebg-preview.png";
import { log } from "console";

interface TransferData {
  id: number;
  pathi: StaticImageData;
  name: string;
  description: string;
  serie: string;
  price: string;
}

export default function useContent() {
  const [currentImage,SetCurrentImagege]=useState <StaticImageData> (img12)
  const handleTranfert = (data: TransferData) => {
    console.log(data);
    
};

const handleCangeImage = (img:StaticImageData) => {
 SetCurrentImagege(img)
  
};
const handleCangeId = (nombre:number) => {
  console.log(nombre);
  
   
 };

  
  // const [count, setCount] = useState<number>(0);
  // const pathname = usePathname(); // Récupère le pathname ou itinéraire de l'URL actuelle
  // const searchParams = useSearchParams(); // Récupère les paramètres de recherche de l'URL actuelle
  // const router = useRouter();
  // const handleChangeCount = () => {
  //   setCount(count + 1);
  // };

  
  // const handleChangeSearchParams = (value: string) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set("q", value);
  //   router.push(`${pathname}?${params.toString()}`);
  // };
  // const q = searchParams.get("q");
  // const message = count < 10 ? "Contact" : "Contactez-nous";


  return { currentImage,handleTranfert,handleCangeImage,handleCangeId };
}

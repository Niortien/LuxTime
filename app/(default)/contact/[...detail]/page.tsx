import React, { Suspense } from "react";
import Content from "./content";
import Loading from "../../../loading";
import { Watch } from "@/types/watch";
import { watches } from "@/data/watches";
import NotFound from "@/app/not-found";
;


interface IProps {
  params: Promise<{ detail: number }>;
}
export default async function Contact({params}:IProps) {
   const { detail } = await params;
   


  
 const contactWatch: Watch[] = watches;

   const montre=contactWatch.find((montre)=> montre.id==detail )
   console.log(montre)

   if(!montre){
    <NotFound />
   }
  return (
    
    <Suspense fallback={<Loading />}>
      <Content montre={montre} />
    </Suspense>
  );
}

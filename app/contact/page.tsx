import React, { Suspense } from "react";
import Content from "./content";
import Loading from "../loading";

export default async function Contact() {
  return (
    <Suspense fallback={<Loading />}>
      <Content />
    </Suspense>
  );
}

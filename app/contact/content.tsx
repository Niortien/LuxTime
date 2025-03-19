"use client";
import React from "react";
import useContent from "./useContent";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Form, FormItem, FormLabel } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import Paiement from "../collection/[...montre]/page";
import ProductChoice from "@/components/contact-component/ProductChoice";
import ProductForm from "@/components/contact-component/ProductForm";

export default function Content() {

    useContent();
  return (
    <div className="flex sm:gap-3">
      {/* <p> Contact {count}</p>
      <p>{message}</p>
      <Button onClick={handleChangeCount}>Modifier</Button>
      <Input
        placeholder="Nom"
        value={q ?? ""}
        onChange={(e) => handleChangeSearchParams(e.target.value)}
      /> */}

   <ProductForm />
    <ProductChoice/>
    </div>
  );
}

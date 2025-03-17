"use client";
import React from "react";
import useContent from "./useContent";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export default function Content() {
  const { count, handleChangeCount, message, handleChangeSearchParams, q } =
    useContent();
  return (
    <div>
      <p> Contact {count}</p>
      <p>{message}</p>
      <Button onClick={handleChangeCount}>Modifier</Button>
      <Input
        placeholder="Nom"
        value={q ?? ""}
        onChange={(e) => handleChangeSearchParams(e.target.value)}
      />
    </div>
  );
}

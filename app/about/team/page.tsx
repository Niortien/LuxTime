import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <div>
      Team page
      <Link href={"/about"}>Allez à la page About.</Link>
    </div>
  );
}

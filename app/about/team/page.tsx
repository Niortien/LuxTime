import { redirect } from "next/navigation";
import React from "react";

export default async function Team() {
  redirect("/contact");
  return (
    <div>
      <h1 className="text-4xl">Team</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        labore, libero laborum quis recusandae assumenda ducimus enim, quasi,
        fugiat nesciunt repellendus? Repudiandae alias neque nisi temporibus
        beatae eius exercitationem dolor?
      </p>
    </div>
  );
}

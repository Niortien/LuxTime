import React from "react";
import Product from "./Product";
import { Watch } from "@/types/watch";

export default function ProductList({ watches }: { watches: Watch[] }) {
  return (
    <>
      <div className="flex flex-col justify-center sm:grid grid-row-4grid grid-cols-3 gap-15   ">
        {watches.map((props) => {
          return (
            <div key={props.id} className="">
              <Product
                id={props.id}
                pathi={props.pathi}
                name={props.name}
                description={props.description}
                serie={props.serie}
                price={props.price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

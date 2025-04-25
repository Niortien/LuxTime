"use client";
import { PostCart } from "@/components/cart/PostCart";
import { Cart } from "@/types/cart";
import { getCarts, login } from "@/services/carts/carts.action";
import React, { useEffect, useState } from "react";

export default function Content() {
  const [Carts, setCarts] = useState<Cart[]>([]);
  useEffect(() => {
    async function fetchCarts() {
     
      const data: Cart[] = await getCarts();
      setCarts(data);
    }
    fetchCarts();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Task List</h1>
          <p className="mt-2 text-gray-600">
            Manage your tasks and stay organized
          </p>
        </div>
        <div className="flex justify-between items-start gap-8">
        <PostCart items={Carts} />
        <form action={login} className="flex flex-col gap-4">
          <input type="text" name="nom" className="border-2 border-blue-500" />
          <input type="text" name="prenom" className="border-2 border-blue-500" />
          <input type="password" name="passeword" className="border-2 border-blue-500" />
          <input type="submit" className="border-2 border-green-100 bg-green-300"/>
        </form>
      </div>
      </div>
      
    </div>
  );
}

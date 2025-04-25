"use client"
import { Watch } from '@/types/watch';
import { create } from 'zustand'

type Store = {
  cartArray: Watch[];
  addToCart: (item: Watch) => void;
  deleteToCart:(id:number)=> void;
}

export const useFinc = create<Store>()((set) => ({
  cartArray: [],
  addToCart: (item: Watch) => set((state) => ({
    cartArray: [...state.cartArray, item],
  })),
  deleteToCart: (id:number) => set((state) => ({
    cartArray:state.cartArray.filter((items)=>items.id !=id)
  })),
}));

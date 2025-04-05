"use client"
import { Watch } from '@/types/watch';
import { create } from 'zustand'

type Store = {
  cartArray: Watch[];
  addToCart: (item: Watch) => void;
}

export const useFinc = create<Store>()((set) => ({
  cartArray: [],
  addToCart: (item: Watch) => set((state) => ({
    cartArray: [...state.cartArray, item],
  })),
}));

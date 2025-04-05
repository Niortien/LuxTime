"use client"
import { useFinc } from '@/Store/Store'
import React from 'react'
import CartElements from './CartElements'
import { Item } from '@radix-ui/react-select'

export default function MyCart() {
  const { cartArray } = useFinc();
  
  return (
    <div className='py-10'>
      <h1 className='text-4xl font-title font-bold text-center text-primary-500'>Mon panier</h1>

      {cartArray.length === 0 ? (
        <div>
          <h1 className='text-4xl font-title font-bold text-center text-primary-800'>Votre panier est vide</h1>
        </div>
      ) : (
        cartArray.map((items) => (
          <CartElements 
            id={items.id}
            name={items.name}
            pathi={items.pathi}
            price={items.price}
            serie={items.serie}
            key={items.id}
            description={items.description}
          />
        ))
      )}
    </div>
  );
}

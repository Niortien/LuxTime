"use server"

import { Cart } from "@/types/cart"

export async function login(formData:FormData) {
    const rawFormData=Object.fromEntries(formData)
    const name=formData.get("nom")
    const surname=formData.get("prenom")
    const passeword=formData.get("passeword")
    console.log(name,surname,passeword)
const reponse = await fetch("https://jsonplaceholder.typicode.com/todos",{
    method:"post",
    body:JSON.stringify({
        name:name,
        surname:surname,
        password:passeword,
    })
})
const data = await reponse.json()
console.log(data)
}

export async function getCarts() :Promise<Cart[]> {
    const res= await fetch("https://jsonplaceholder.typicode.com/todos")
    const data:Cart[]= await res.json(); 
    return data;
      
}

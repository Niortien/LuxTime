// export const dynamic = 'force-dynamic'
import React from 'react'
import Content from './content';
import { Post } from '@/types/posts';

export const revalidate = 60
export  default async function Page() {
  const response = await fetch("https://api.vercel.app/blog");
const postsTable:Post[]= await response.json()

  return (
    <Content posts={postsTable} />

  )
}

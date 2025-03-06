'use client'
import { HeroProvider } from "./heroui.provider";




export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroProvider>
      {children}
    </HeroProvider>
  )
}
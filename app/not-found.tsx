"use client";

import Link from "next/link";
import { LightbulbOff } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-card rounded-2xl p-8 md:p-12 text-center">

        {/* 404 Content */}
        <div className="space-y-8">
          {/* Lightbulb Icon */}
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="relative flex items-center justify-center w-full h-full">
              <LightbulbOff className="w-20 h-20 text-primary" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-8xl font-bold text-primary tracking-tighter">
              404
            </h1>
            <h2 className="text-xl font-semibold text-foreground">
              LOOKS LIKE YOU&apos;RE LOST
            </h2>
            <p className="text-muted-foreground">
              The page you are looking for is not available!
            </p>
          </div>

          {/* Button */}
          <Link href="/">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              size="lg"
            >
              GO TO HOME
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
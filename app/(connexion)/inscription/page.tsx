import React from "react";
import SignupForm from "@/components/inscription/SignupForm";
import { WatchIllustration } from "@/components/inscription/Signillustrator";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-5xl overflow-hidden bg-white rounded-3xl shadow-lg flex flex-col md:flex-row">
        {/* Left side with illustration */}
        <div className="w-full md:w-1/2 bg-primary-400 p-10 flex flex-col justify-between text-white">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold">LuxTime</span>
              <div className="text-sm leading-tight">
                <div>Watch</div>
                <div>World</div>
              </div>
            </div>
            <div className="text-xs mb-16">Simply buy your Future Watch </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Learn more From World's Watch
            </h1>
            <h1 className="text-3xl font-bold mb-2">
              All World's Best Watches
            </h1>
            <h1 className="text-3xl font-bold mb-2">Be always on TIME</h1>
          </div>

          <div className="relative h-64">
            <WatchIllustration />
          </div>
        </div>

        {/* Right side with signup form */}
        <div className="w-full md:w-1/2 p-10 flex items-center justify-center">
          <SignupForm />
        </div>
      </div>
    </main>
  );
}

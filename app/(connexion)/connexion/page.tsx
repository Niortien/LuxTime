import React from 'react';
import LoginForm from '@/components/connexion/LoginForm';
import { IllustrationSvg } from '@/components/connexion/Illustrator';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen px-4">
      <div className="flex flex-col md:flex-row w-full">
        {/* Left side with illustration */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-white-400 to-primary-300 p-8 flex items-center justify-center rounded-2xl">
          <div className="max-w-md">
            <IllustrationSvg />
          </div>
        </div>
        
        {/* Right side with login form */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

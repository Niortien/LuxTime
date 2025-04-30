"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { InscriptionSchema } from "@/services/auth/auth.schema";
import { inscription } from "@/services/auth/auth.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InscriptionSchema>();

  const handleInscription: SubmitHandler<InscriptionSchema> = async (data) => {
    const result = await inscription({
      ...data,
      image: files[0],
    });
    if (result.success) {
      toast.success("Inscription reussie");
      router.push("/connexion");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <div className="text-sm text-gray-500 flex items-center">
          French(FR)
          <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(handleInscription)}>
        <div>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                const file = e.target.files[0] as File;
                setFiles([file]);
              }
            }}
            multiple={false}
            accept="image/*"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
        </div>
        <div>
          <input
            {...register("last_name")}
            placeholder="Nom"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
        </div>

        <div>
          <input
            {...register("first_name")}
            placeholder="Prenom"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
        </div>
        <div>
          <input
            type="date"
            {...register("birth_date")}
            placeholder="Date de naissance"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            required
          />
        </div>

        <div className="relative">
          <input
            {...register("password")}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 pr-10"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clipRule="evenodd"
                />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-full hover:bg-primary-700 transition-colors"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or Sign Up With</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-3">
          <a
            href="https://google.com/"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-500 hover:bg-gray-50"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/?locale=fr_FR"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-500 hover:bg-gray-50"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="https://www.google.com/search?q=instagram&oq=instagra&gs_lcrp=EgZjaHJvbWUqGAgAEAAYQxiDARiLAxixAxiABBiKBRj4BTIYCAAQABhDGIMBGIsDGLEDGIAEGIoFGPgFMhUIARAAGEMYgwEYiwMYsQMYgAQYigUyDwgCEAAYQxiLAxiABBiKBTISCAMQABhDGIsDGLEDGIAEGIoFMg8IBBAAGEMYiwMYgAQYigUyDwgFEAAYQxiLAxiABBiKBTIPCAYQABhDGIsDGIAEGIoFMg8IBxAAGEMYiwMYgAQYigUyDwgIEAAYQxiLAxiABBiKBTIHCAkQABiPAtIBCTQ0MTRqMWoxNagCCLACAfEFDf_DfsYlhC0&sourceid=chrome&ie=UTF-8"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-500 hover:bg-gray-50"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://x.com/"
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-500 hover:bg-gray-50"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          href="/connexion"
          className="text-primary-600 hover:text-primary-500"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

// Add this to app/page.tsx to link to the inscription page
// Inside the existing Home component:
/*
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Bienvenue sur notre application</h1>
      <p className="text-xl mb-8">Cliquez ci-dessous pour vous connecter ou vous inscrire</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/connexion" 
          className="bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition-colors"
        >
          Se connecter
        </Link>
        <Link 
          href="/inscription" 
          className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition-colors"
        >
          S'inscrire
        </Link>
      </div>
    </main>
  );
}
*/

"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ConnexionSchema } from "@/services/auth/auth.schema";
import { connexion } from "@/services/auth/auth.action";
import { toast } from "sonner";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConnexionSchema>();

  const handleConnexion: SubmitHandler<ConnexionSchema> = async (data) => {
    const result = await connexion(data);
    if (result.success) {
      toast.success("Connexion reussie");
      localStorage.setItem("token", result.data.token);
      router.push("/");
    } else {
      toast.error(result.error);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="text-center mb-8">
        <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-primary-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-600 uppercase tracking-wide">
          USER LOGIN
        </h2>
      </div>

      <form onSubmit={handleSubmit(handleConnexion)} className="space-y-6">
        <div>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-none flex-grow focus:outline-none text-gray-600"
              {...register("email")}
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>

        <div>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent border-none flex-grow focus:outline-none text-gray-600"
              {...register("password")}
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
        </div>

        {/* <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 accent-primary-600"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me" className="ml-2 text-gray-500">Remember me</label>
          </div>
          <a href="#" className="text-gray-500 hover:text-primary-600">Forgot Password</a>
        </div> */}

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-full hover:bg-primary-700 transition-colors"
        >
          LOGIN
        </button>

        <div className="text-center mt-4">
          <Link
            href="/inscription"
            className="text-sm text-gray-500 hover:text-primary-600"
          >
            s'inscrire
          </Link>
        </div>

        <div className="text-center mt-4">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-primary-600"
          >
            Retour à l'accueil
          </Link>
        </div>
      </form>
    </div>
  );
}

// File: components/LoginForm.tsx

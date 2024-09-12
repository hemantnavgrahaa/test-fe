"use client";
import LoginForm from "@/components/atoms/loginForm/loginForm";
import { allRoutes } from "@/constants/allRoutes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default async function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push(allRoutes.HOME);
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center m-4">
      <LoginForm />
    </div>
  );
}

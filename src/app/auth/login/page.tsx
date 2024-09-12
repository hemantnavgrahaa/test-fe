"use client";
import LoginForm from "@/components/atoms/loginForm/loginForm";
import { allRoutes } from "@/constants/allRoutes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const session = useSession();
  const router = useRouter();

  if (session?.data) {
    router.push(allRoutes.HOME);
  }

  return (
    <div className="flex min-h-screen flex-col justify-center items-center m-4">
      <LoginForm />
    </div>
  );
}

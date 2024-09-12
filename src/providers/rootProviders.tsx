"use client";
import BNavigationTwo from "@/components/atoms/bottomNavigation/bNavigationTwo";
import { SessionProvider } from "next-auth/react";

export default function RootProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <BNavigationTwo />
    </>
  );
}

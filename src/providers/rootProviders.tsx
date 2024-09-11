"use client";
import BNavigationTwo from "@/components/atoms/bottomNavigation/bNavigationTwo";
import RootLoader from "@/components/atoms/rootLoader/rootLoader";
import { SessionProvider } from "next-auth/react";

export default function RootProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SessionProvider>
        <RootLoader />
        {children}
      </SessionProvider>
      <BNavigationTwo />
    </>
  );
}

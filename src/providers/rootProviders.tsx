"use client";
import BNavigationTwo from "@/components/atoms/bottomNavigation/bNavigationTwo";

export default function RootProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <BNavigationTwo />
    </>
  );
}

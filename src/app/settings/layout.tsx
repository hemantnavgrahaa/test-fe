import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is setting page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

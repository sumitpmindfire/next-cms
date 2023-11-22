import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog CMS",
  description: "Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const isLoggedIn = cookieStore.get("user");
  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoggedIn && <Header />}
        {children}
      </body>
    </html>
  );
}

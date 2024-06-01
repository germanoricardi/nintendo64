import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import { cn } from "@/helpers/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nintendo 64",
  description: "Página de games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn('bg-slate-890 text-slate-300', inter.className)}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}

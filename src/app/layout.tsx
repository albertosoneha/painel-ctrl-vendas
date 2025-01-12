import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"

import { Sidebar } from '@/components/sidebar'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Painel de Controlo de Vendas",
  description: "Controlo & estatísticas de vendas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}>
          <Sidebar/>
        {children}
      </body>
    </html>
  );
}

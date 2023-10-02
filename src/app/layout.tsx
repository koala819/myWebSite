import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Top } from "@/components/Top";
import { Footer } from "@/components/Footer";
import { ThemeProviders } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIX31",
  description: "Developpeur Independant Xavier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr'>
      <body className={`h-screen w-full ${inter.className}`}>
        <ThemeProviders>
          <div className='w-full lg:w-8/12 px-4 mx-auto mt-6 '>
            <div className='flex flex-col min-w-0 break-words w-full mb-6rounded-lg bg-gray-50 dark:bg-slate-800 border-0'>
              <nav>
                <Top />
              </nav>
              <main className='flex-1'>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}

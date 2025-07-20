import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { DynamicBackground } from "@/components/DynamicBackground";
import { NavBar } from "@/components/NavBar";

const poppins = Poppins({
  weight: ['400', '600', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "TravelnShare",
  description: "by Najwa Kahani Fatima",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`} >
        <NavBar/> 
        <DynamicBackground>
          <main className="mt-14"> {children} </main>
        </DynamicBackground>
      </body>
    </html>
  );
}

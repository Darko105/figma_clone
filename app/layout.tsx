import type { Metadata } from "next";
import { Romanesco, Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400","600","700"]
 });

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "Figma Clone using NextJs & LiveBlock for live colloborations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${workSans.className} bg-primary-200'}>
        <Room >
          {children}  
        </Room>  
      </body>
    </html>
  );
}

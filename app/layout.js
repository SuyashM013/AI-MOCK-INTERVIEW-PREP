import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'
import { Toaster } from "@/components/ui/toaster";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Interviewer",
  description: "Take interview with help of AI",
};


export default function RootLayout({ children }) {


  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
      }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >

          <Toaster />
          
            {children}
        
        </body>
      </html>
     </ClerkProvider> 
  );
}

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
        <head>
          <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
          {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}
        </head>
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

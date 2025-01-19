import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import "./loco.css";
import BgVideo from "@/component/reuseable/BgVideo";
import Footer from "@/component/Footer";
import Loco from "@/component/Loco";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.css"/>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <BgVideo />
        <Loco>
          <div id="main" className=" relative z-10">
            {children}
          </div>
          <Footer />
        </Loco>
        <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init()</script>
      </body>
    </html>
  );
}

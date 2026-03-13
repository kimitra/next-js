import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "../../components/NavBar.js";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lab 15",
  description: "Intro to Next.js setup",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <main style={{padding: "1rem"}}>{children}</main>
      </body>
    </html>
  );
}

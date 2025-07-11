// app/(landing)/layout.tsx

import { Exo_2 } from "next/font/google";
import "../globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar"; // ✅ your custom Navbar
import { Toaster } from "sonner";

const exo2 = Exo_2({ variable: "--font-exo2", subsets: ["latin"] });

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${exo2.className} bg-[#030014] overflow-x-hidden overflow-y-scroll antialiased`}>
        <Navbar /> {/* ✅ ONLY shown in landing */}
        <StarsCanvas />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

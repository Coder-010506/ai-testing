// app/layout.tsx
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const exo2 = Exo_2({ variable: "--font-exo2", subsets: ["latin"] });

export default function MainAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${exo2.className} bg-[#030014] text-white antialiased`}
      >
        <main className="min-h-screen">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

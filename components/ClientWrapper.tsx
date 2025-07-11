// components/ClientWrapper.tsx
"use client";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // You can now use pathname conditionally here if needed

  return <>{children}</>;
}

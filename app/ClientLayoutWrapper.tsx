"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function ClientLayoutWrapper({
  children,
  navbar,
  footer,
  stars,
}: {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
  stars: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <div className={`${isLandingPage ? "bg-[#030014]" : "bg-background"} min-h-screen overflow-x-hidden`}>
      {isLandingPage && stars}
      {isLandingPage && navbar}
      <main className="relative z-10 min-h-screen">{children}</main>
      {isLandingPage && footer}
    </div>
  );
}

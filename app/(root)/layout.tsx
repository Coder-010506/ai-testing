import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";
import LogoutButton from "@/components/LogoutButton"; // << import this

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-up");

  return (
    <div className="min-h-screen flex flex-col items-center justify-between relative">
      {/* Navbar */}
      <nav className="w-full max-w-screen-xl flex items-center justify-between px-6 py-4 m-5 rounded-2xl bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md z-50">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
            <Image src="/logo2.png" alt="Robot Logo" width={40} height={40} className="rounded-full" />
            <span>HireQuest-AI</span>
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex gap-8 flex-1 justify-center">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition font-medium cursor-pointer">
            Home
          </Link>
          <Link href="/allinterviews" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition font-medium cursor-pointer">
            All Interviews
          </Link>
          <Link href="/interview" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition font-medium cursor-pointer">
            Make Interview
          </Link>
        </div>

        {/* Right: Logout */}
        <div className="flex items-center gap-4">
          <LogoutButton /> {/* use client logout button */}
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 md:px-8 z-10">{children}</main>
    </div>
  );
};

export default Layout;

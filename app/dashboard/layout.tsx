import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";
import Image from "next/image";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-up");

  return (
    <div className="min-h-screen flex flex-col items-center relative bg-background">
      {/* Clean Navbar */}
      <nav className="w-full max-w-screen-xl flex items-center justify-between px-6 py-4 m-5 rounded-2xl bg-white dark:bg-gray-900 border-b border-gray-700 shadow-md z-50">
        <Link href="/dashboard" className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
          <Image src="/logo2.png" alt="Logo" width={40} height={40} className="rounded-full" />
          HireQuest-AI
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/dashboard" className="hover:text-blue-600 dark:text-gray-200">Home</Link>
          <Link href="/allinterviews" className="hover:text-blue-600 dark:text-gray-200">All Interviews</Link>
          <Link href="/interview" className="hover:text-blue-600 dark:text-gray-200">Make Interview</Link>
        </div>

        <LogoutButton />
      </nav>

      <main className="flex-1 w-full px-4 md:px-8">{children}</main>
    </div>
  );
}

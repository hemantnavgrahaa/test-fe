import { allRoutes } from "@/constants/allRoutes";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-50">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href={allRoutes.HOME}
        className="mt-6 px-6 py-3 text-white dark:text-gray-100 bg-slate-600 rounded-md"
      >
        Reset to Home
      </Link>
    </div>
  );
}

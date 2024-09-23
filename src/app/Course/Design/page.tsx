import React from "react";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white dark:bg-dark text-center">
      <h1 className="text-6xl font-bold text-red-700">404</h1>
      <h2 className="mt-4 text-2xl">Oops! Page Not Found</h2>
      <p className="mt-2">The page you are looking for does not exist.</p>
      <Link href="/">
        <span className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition">
          Go Back Home
        </span>
      </Link>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white  shadow">
      <div className="lg:max-w-7xl mx-auto flex justify-between items-center px-4 py-4 border-b  mb-6">
        <div className="font-semibold text-2xl">NextBlog</div>
        <nav>
          <ul className="flex items-center gap-3">
            <li className="text-gray-900 hover:text-rose-500 transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-900 hover:text-rose-500 transition-all">
              <Link href="/">Blog</Link>
            </li>
            <li className="text-gray-900 hover:text-rose-500 transition-all">
              <Link href="/authors">Authors</Link>
            </li>
            <li className="text-gray-900 hover:text-rose-500 transition-all">
              <Link href="/">About</Link>
            </li>
            <li className="text-gray-900 hover:text-rose-500 transition-all">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

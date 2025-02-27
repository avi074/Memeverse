"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold">MemeVerse 🎭</h1>
        </Link>
        <div className="space-x-6">
          <Link href="/explore">Explore</Link>
          <Link href="/leaderboard">Leaderboard</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/profile">Profile</Link>
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

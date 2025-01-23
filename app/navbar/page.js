"use client";

import Link from 'next/link';
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';

export default function Navbar() {
  const { isAuthenticated, login, logout } = useKindeAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">My Blog</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          </li>
        </ul>
        <div>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={login}
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

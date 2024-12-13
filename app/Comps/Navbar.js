import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-color2 text-white max-w-lg mx-auto sticky top-6 flex justify-between h-16 rounded-full">
          <div className="flex">
              <img src="/Icons/golatif transparent.png" className="h-44 -mt-14" />
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="hover:text-gray-200 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-200 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-200 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
    </nav>
  );
}

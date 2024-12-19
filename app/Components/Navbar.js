import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-color2 text-white max-w-lg mx-auto sticky top-6 flex justify-between h-16 rounded-full shadow-2xl">
          <div className="flex">
              <img src="/Icons/golatif transparent.png" className="h-44 -mt-[58px]" />
            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="hover:text-gray-200 pr-3 py-5 text-l font-bold">
                Home
              </Link>
              <Link href="/Login" className="hover:text-gray-200 px-3 py-5 text-l font-bold">
                Log in
              </Link>
              <Link href="/contact" className="hover:text-gray-200 px-3 py-5 text-l font-bold">
                Contact
              </Link>
            </div>
          </div>
    </nav>
  );
}

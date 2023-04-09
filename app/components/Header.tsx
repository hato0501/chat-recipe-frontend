// components/Header.tsx

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/">
              <span className="text-white font-bold text-xl">Recipe Chat App</span>
            </Link>
          </li>
          <li>
            <Link href="/chat">
              <span className="text-white font-semibold">Chat</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

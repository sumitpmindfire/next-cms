import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="p-4 bg-gray-100 flex gap-4">
      <Link href="/" className="text-blue-500">
        Home
      </Link>
      <Link href="/blogs" className="text-blue-500">
        Blogs
      </Link>
    </nav>
  );
};

export default Header;

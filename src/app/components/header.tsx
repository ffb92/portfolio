import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: 'About Me', href: '#about-me' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mx-4 my-4 flex items-center justify-between lg:mx-16">
      <Link href="/">
        <Image src="/logo_bg.png" alt="Logo" width={70} height={40} />
      </Link>
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-zinc-500 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <nav className={`lg:flex items-center gap-4 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-sm text-zinc-500 duration-500 hover:text-zinc-300"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;

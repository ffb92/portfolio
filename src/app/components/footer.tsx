import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <Link
            href="https://linkedin.com/in/benjamin-westphal-70606121a"
            aria-label="LinkedIn"
            target="blank"
          >
            <FaLinkedin className="text-4xl duration-500 text-zinc-500 hover:text-zinc-300" />
          </Link>
          <Link href="https://github.com/ffb92" aria-label="GitHub" target="blank">
            <FaGithub className="text-4xl duration-500 text-zinc-500 hover:text-zinc-300" />
          </Link>
        </div>
        <div className="flex justify-center mb-4 bg-slate-300 w-4/5 sm:w-1/3 lg:w-1/5 h-10 border-2 border-slate-900 rounded-lg">
          <Link
            href="mailto:bwestphal@gmx.net"
            className="flex items-center text-lg duration-500 text-slate-900 hover:text-slate-600"
          >
            <FaEnvelope className="mr-2" />
            <p>bwestphal@gmx.net</p>
          </Link>
        </div>
        <div className="mb-4">
          <Link href="/policy" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            Privacy Policy
          </Link>
        </div>
        <div>
          <p className="text-sm text-zinc-500">2024 © Benjamin Westphal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

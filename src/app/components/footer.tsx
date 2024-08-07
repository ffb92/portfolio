import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaReddit, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <Link href="https://linkedin.com/in/benjamin-westphal-70606121a" aria-label="LinkedIn">
            <FaLinkedin className="text-4xl duration-500 text-zinc-500 hover:text-zinc-300" />
          </Link>
          <Link href="https://github.com/ffb92" aria-label="GitHub">
            <FaGithub className="text-4xl duration-500 text-zinc-500 hover:text-zinc-300" />
          </Link>
        </div>
        <div className="flex justify-center mb-4 bg-slate-300 w-1/5 h-10 border-solid border-2 border-slate-900 rounded-lg">
          <Link
            href="mailto:tristan.chin@chintristan.io"
            className="flex items-center text-l duration-500 text-slate-900 hover:text-slate-600"
          >
            <FaEnvelope className='mr-1' />
            <p>bwestphal@gmx.net</p>
          </Link>
        </div>
        <div className="mb-4">
          <Link
            href="/policy"
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            Privacy Policy
          </Link>
        </div>
        <div>
          <p className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            2024 © Benjamin Westphal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

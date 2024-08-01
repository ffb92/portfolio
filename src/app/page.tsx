'use client';
import Link from 'next/link';
import Particles from './components/particles';
import { motion } from 'framer-motion';
import Image from 'next/image';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <main>
      <nav className="mx-16 my-4 animate-fade-in flex items-center justify-between ">
        <div className="">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={70} height={40} />
          </Link>
        </div>
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <motion.h1
            className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
          >
            Benjamin Westphal
          </motion.h1>
          <motion.div
            className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </motion.div>
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500">
            <p>Creative Web Developer focused on bringing unique ideas to life through code.</p>
          </h2>
        </div>
      </div>
    </main>
  );
}

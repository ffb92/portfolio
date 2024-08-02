'use client';
import Link from 'next/link';
import Particles from './components/particles';
import { motion } from 'framer-motion';
import Image from 'next/image';

const navigation = [
  { name: 'About Me', href: '#about-me' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Home() {
  return (
    <div className="w-full">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      {/* //? Navigation/Header */}
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
      <div className="h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0">
        {/* //? Main */}
        <main className="bg-gradient-to-tl from-black via-zinc-600/20 to-black">
          {/* //? Framermotion with name and stripes  */}
          <div className="flex flex-col items-center justify-center  min-h-screen">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <motion.div
                className="hidden w-full h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
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
                className="hidden w-full h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </motion.div>
            {/* //! animate hier eine Auswirkung? Mit FM ergänzen */}
            <div className="my-16 text-center animate-fade-in">
              <h2 className="text-sm text-zinc-500">
                <p>Creative Web Developer focused on bringing unique ideas to life through code.</p>
              </h2>
            </div>
          </div>
          {/* //? parent div for the sections */}
          <div className="px-40">
            {/* //? about-me section starts here */}
            <div className=" h-3 md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/50" />
            <section id="about-me" className="flex justify-center content-center py-20 ">
              <Image
                src="/about_me.png"
                alt="about_me_picture"
                width={300}
                height={300}
                className="rounded-2xl"
              ></Image>
              <div className="px-10">
                <h2 className="text-9xl">Hello 👋</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia fugit
                  dolorum et minima eum adipisci, eveniet commodi enim nisi.
                </p>
              </div>
            </section>
            {/* //? skills section starts here */}
            <div className=" h-3 md:block bg-gradient-to-r from-zinc-300/50 via-zinc-300/50 to-zinc-300/0" />
            <section id="skills" className="flex flex-col justify-center content-center py-20 ">
              <h2 className="text-9xl">Skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia fugit
                dolorum et minima eum adipisci, eveniet commodi enim nisi.
              </p>
            </section>
            {/* //? projects section starts here */}
            <div className=" h-3 md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/50" />
            <section id="projects" className="flex flex-col justify-center content-center py-20">
              <h2 className="text-9xl">Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quia fugit
                dolorum et minima eum adipisci, eveniet commodi enim nisi.
              </p>
            </section>
            {/* //? experience section starts here */}
            <div className=" h-3 md:block bg-gradient-to-r from-zinc-300/50 via-zinc-300/50 to-zinc-300/0" />
            <section id="experience" className="flex flex-col justify-center content-center py-20">
              <h2 className="text-9xl">Experience</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum ex veniam
                quis doloremque ea distinctio in possimus fuga blanditiis.
              </p>
            </section>
            {/* //? contact section starts here */}
            <div className=" h-3 md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/50" />
            <section id="contact" className="flex flex-col justify-center content-center py-20">
              <h2 className="text-9xl">Contact</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum ex veniam
                quis doloremque ea distinctio in possimus fuga blanditiis.
              </p>
            </section>
          </div>
        </main>
      </div>
        {/* //! Footer section starts here */}

    </div>
  );
}

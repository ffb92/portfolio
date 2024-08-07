'use client';
import { useState } from 'react';
import Link from 'next/link';
import Particles from './components/particles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SkillDashboard from './components/skillCard';
import ProjectCard from './components/projectCard';
import Education from './components/experience';
import Footer from './components/footer';

const navigation = [
  { name: 'About Me', href: '#about-me' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      {/* Navigation/Header */}
      <header className="mx-4 my-4 flex items-center justify-between lg:mx-16">
        <Link href="/">
          <Image src="/logo_bg.png" alt="Logo" width={70} height={40} />
        </Link>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-500 focus:outline-none"
          >
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
      <div className="h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      {/* Main */}
      <main className="bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        {/* Framermotion with name and stripes */}
        <section className="flex flex-col items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="flex flex-col items-center"
          >
            <motion.div
              className="hidden w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            <motion.h1
              className="py-3.5 px-0.5 z-10 text-4xl text-transparent bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl bg-clip-text"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.5, ease: 'easeOut' }}
            >
              Benjamin Westphal
            </motion.h1>
            <motion.div
              className="hidden w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </motion.div>
          <div className="my-16 text-center">
            <h2 className="text-xl text-zinc-500">
              <p>Creative Web Developer focused on bringing unique ideas to life through code.</p>
            </h2>
          </div>
        </section>
        {/* Parent div for the sections */}
        <div className="px-4 lg:px-40">
          {/* About-me section */}
          <section
            id="about-me"
            className="flex flex-col md:flex-row justify-center content-center"
          >
            <div>
              <div className="h-3 w-60 bg-zinc-300 rounded-2xl m-5" />
              <div className="py-10">
                <Image
                  src="/about_me.png"
                  alt="about_me_picture"
                  width={600}
                  height={500}
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="px-0 md:px-10">
              <h2 className="text-4xl md:text-6xl">Hello 👋</h2>
              <p className="text-lg md:text-xl py-7">
                I am a web developer who was born and raised near Cologne. Since I was a child, I
                have been passionate about technology and computer science. Ever since I came into
                contact with coding, I have been very enthusiastic. I like to try out new things,
                libraries and frameworks to make great software!
              </p>
              <p className="text-lg md:text-xl py-2">
                Apart from programming, I am an enthusiastic gamer. From almost all Square Enix
                games, like Kingdom Hearts or Final Fantasy, which accompanied my youth, to Baldurs
                Gate and fantastic titles from Nintendo, such as Zelda or Super Smash Bros. When I
                am not at the computer, I spend a lot of time on the football field as an assistant
                coach for a local club or cheer for my favorite team, 1. FC Köln.
              </p>
              <p className="text-lg md:text-xl py-2">
                Fun fact: I have three cats who love to keep me company while I code.
              </p>
            </div>
          </section>
          {/* Skills section */}
          <SkillDashboard />
          {/* Projects section */}
          <section id="projects" className="flex flex-col justify-center content-center">
            <div className="flex flex-row">
              <div className="h-3 w-60 bg-zinc-300 rounded-2xl m-5" />
              <h2 className="text-4xl md:text-6xl px-10">Projects</h2>
            </div>
            <div className="px-5 py-10">
              <p className="text-lg md:text-xl py-2">
                Here is a few of the projects I have worked on. You can see the full list on my
                <Link
                  className="underline text-2xl text-zinc-500 duration-500 hover:text-zinc-300"
                  href={'https://github.com/ffb92'}
                >
                  {' '}
                  Github profile
                </Link>
              </p>
            </div>
            <ProjectCard />
          </section>
          {/* Experience section */}
          <section id="experience" className="flex flex-col justify-center content-center py-10">
            <div className="flex flex-row">
              <div className="h-3 w-60 bg-zinc-300 rounded-2xl m-5" />
              <h2 className="text-4xl md:text-6xl px-10">Experience</h2>
            </div>
            <div className="px-5">
              <Education />
            </div>
          </section>
        </div>
      </main>
      {/* Footer section */}
      <footer>
        <div className="h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Footer />
      </footer>
    </div>
  );
}

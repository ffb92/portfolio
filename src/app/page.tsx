'use client';
import Link from 'next/link';
import Particles from './components/particles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SkillDashboard from './components/skillCard';
import ProjectCard from './components/projectCard';
import Education from './components/experience';
import Contact from './components/contact';

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
                className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text"
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
              <h2 className="text-xl text-zinc-500">
                <p>Creative Web Developer focused on bringing unique ideas to life through code.</p>
              </h2>
            </div>
          </div>
          {/* //? parent div for the sections */}
          <div className="px-40">
            {/* //? about-me section starts here */}
            <section id="about-me" className="flex justify-center content-center py-10 ">
              <div>
                <div className=" h-3 w-60 md:block  bg-zinc-300 rounded-2xl m-5" />
                <div className="py-10">
                  <Image
                    src="/about_me.png"
                    alt="about_me_picture"
                    width={1600}
                    height={500}
                    className="rounded-2xl"
                  ></Image>
                </div>
              </div>
              <div className="px-10">
                <h2 className="sm:text-4xl md:text-6xl">Hello 👋</h2>
                <p className="md:text-xl py-2">
                  I'm a web developer who was born and raised near Cologne. Since I was a child,
                  I've been passionate about technology and computer science. Ever since I came into
                  contact with coding, I have been very enthusiastic. I like to try out new things,
                  libraries and frameworks to make great software!
                </p>
                <p className="md:text-xl py-2">
                  Apart from programming, I am an enthusiastic gamer. From almost all Square Enix
                  games, like Kingdom Hearts or Final Fantasy, which accompanied my youth, to
                  Baldur's Gate and fantastic titles from Nintendo, such as Zelda or Super Smash
                  Bros. When I am not at the computer, I spend a lot of time on the football field
                  as an assistant coach for a local club or cheer for my favorite team, 1. FC Köln.
                </p>
                <p className="md:text-xl py-2">
                  Fun fact: I have three cats who love to keep me company while I code.
                </p>
              </div>
            </section>
            {/* //? skills section starts here */}
            <SkillDashboard />
            {/* //? projects section starts here */}
            <section id="projects" className="flex flex-col justify-center content-center py-10 ">
              <div className="flex fle-row just">
                <div className=" h-3 w-60 md:block  bg-zinc-300 rounded-2xl m-5" />
                <h2 className="sm:text-4xl md:text-6xl px-10">Projects</h2>
              </div>
              <div className="px-5">
                <p className="md:text-xl py-2">
                  Here's a few of the projects I've worked on. You can see the full list on my
                  <Link className="underline" href={'https://github.com/ffb92'}>
                    {' '}
                    Github profile
                  </Link>
                </p>
              </div>
              <ProjectCard />
            </section>
            {/* //? education section starts here */}

            <section id="experience" className="flex flex-col justify-center content-center py-10 ">
              <div className="flex fle-row just">
                <div className=" h-3 w-60 md:block  bg-zinc-300 rounded-2xl m-5" />
                <h2 className="sm:text-4xl md:text-6xl px-10">Experience</h2>
              </div>
              <div className="px-5">
                <Education />
              </div>
            </section>
            {/* //? contact section starts here */}
            <section id="contact" className="flex flex-col justify-center content-center py-10 ">
              <div className="flex fle-row just">
                <div className=" h-3 w-60 md:block  bg-zinc-300 rounded-2xl m-5" />
                <h2 className="sm:text-4xl md:text-6xl px-10">Contact</h2>
              </div>
              <div className="px-5">
              <Contact />
              </div>
            </section>
          </div>
        </main>
      </div>
      {/* //! Footer section starts here */}
    </div>
  );
}

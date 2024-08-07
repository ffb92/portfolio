'use client';
import Particles from './components/particles';
import SkillDashboard from './components/skillCard';
import ProjectCard from './components/projectCard';
import Education from './components/experience';
import Footer from './components/footer';
import Header from './components/header';
import Intro from './components/intro';
import Stripe from './components/stripe';
import AboutMe from './components/aboutMe';

export default function Home() {
  return (
    <div className="w-full">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      {/* Navigation/Header */}
      <Header />
      <Stripe />
      {/* Main */}
      <main className="bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        {/* intro/Framermotion with name and stripes */}
        <Intro />
        {/* Parent div for the sections */}
        <div className="px-4 lg:px-40">
          {/* About-me section */}
          <AboutMe />
          {/* Skills section */}
          <SkillDashboard />
          {/* Projects section */}
          <ProjectCard />
          {/* Experience section */}
          <Education />
        </div>
      </main>
      {/* Footer section */}
      <footer>
        <Stripe />
        <Footer />
      </footer>
    </div>
  );
}

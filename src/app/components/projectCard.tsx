import Link from 'next/link';

const ProjectCard = () => {
  return (
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

      <div className="pb-10">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto mb-4 md:mb-0 w-full md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-2xl font-bold">RE</span>
              </div>
              <h2 className="ml-4 text-xl font-semibold">React Project Carnival Club</h2>
            </div>
            <p className="mb-4">My final React project for a local carnival club.</p>
            <Link
              href="https://github.com/ffb92/react-final-project"
              className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
            >
              Click Here!
            </Link>
          </div>

          <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto w-full md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-2xl font-bold">PF</span>
              </div>
              <h2 className="ml-4 text-xl font-semibold">Own Portfolio</h2>
            </div>
            <p className="mb-4">The website you are currently on.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;

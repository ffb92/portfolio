import Link from 'next/link';

const projectCard = () => {
  return (
    <div className="pb-10">
      <div className="flex">
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto w-2/3">
          <div className="flex items-center mb-8">
            <div className="bg-purple-600 rounded-full h-12 w-12 flex items-center justify-center">
              <span className="text-2xl font-bold">RE</span>
            </div>
            <h2 className="ml-4 text-xl font-semibold">React Project Carnival Club</h2>
          </div>
          <p className="mb-4">my final React Project for a local carnival club.</p>
          <Link href={'https://github.com/ffb92/react-final-project'} className='text-xl duration-500 text-zinc-500 hover:text-zinc-300'>Click Here!</Link>
        </div>

        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto w-2/3">
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
  );
};

export default projectCard;

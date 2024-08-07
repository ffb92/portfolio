import Image from 'next/image';

type SkillCardProps = {
  title: string;
  skills: Array<{ name: string; level: number; icon: string }>;
};

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className='py-10'>
  <div className="bg-gray-900 p-4 rounded-lg">
    <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center mb-2">
          <span className="text-xl mr-2">{skill.name}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Image
                width={24}
                height={24}
                key={i}
                src={skill.icon}
                alt={`${skill.name} icon`}
                className={i < skill.level ? 'mr-1' : 'mr-1 grayscale'}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
  </div>
);

const SkillDashboard = () => {
  const skillCategories = [
    {
      title: 'WEB',
      skills: [
        {
          name: 'HTML',
          level: 5,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg',
        },
        {
          name: 'CSS',
          level: 5,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg',
        },
        {
          name: 'JavaScript',
          level: 4,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg',
        },
        {
          name: 'TypeScript',
          level: 4,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
        },
        {
          name: 'React',
          level: 5,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        },
        {
          name: 'Next.JS',
          level: 4,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg',
        },
        {
          name: 'TailwindCSS',
          level: 5,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        },
        {
          name: 'Node.JS',
          level: 5,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
        },
      ],
    },
    {
      title: 'DATABASE',
      skills: [
        {
          name: 'MongoDB',
          level: 5,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
        },
        {
          name: 'Express',
          level: 5,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
        },
        {
          name: 'Prisma',
          level: 3,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
        },
      ],
    },
    {
      title: 'OTHER',
      skills: [
        {
          name: 'Figma',
          level: 3,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        },
        {
          name: 'Windows',
          level: 5,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg',
        },
        {
          name: 'Linux',
          level: 4,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg',
        },
        {
          name: 'Git',
          level: 4,
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        },
      ],
    },
  ];

  return (
    <div>
      <section id="projects" className="flex flex-col py-10 ">
        <div className="flex flex-row">
          <div className="h-3 w-60 md:block bg-zinc-300 rounded-2xl m-5" />
          <h2 className="sm:text-4xl md:text-6xl px-10">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillDashboard;

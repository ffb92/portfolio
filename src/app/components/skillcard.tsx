import React from 'react';

type SkillCardProps = {
  title: string;
  skills: Array<{ name: string; level: number; color: string }>;
};

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="bg-gray-900 p-4 rounded-lg">
    <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center mb-2">
          <span className="text-white mr-2">{skill.name}</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`w-4 h-4 mr-1 ${
                  i < skill.level ? skill.color : 'bg-gray-700'
                } rounded-full`}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const SkillDashboard = () => {
  const skillCategories = [
    {
      title: 'WEB',
      skills: [
        { name: 'HTML', level: 5, color: 'bg-orange-500' },
        { name: 'CSS', level: 5, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 4, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 4, color: 'bg-blue-600' },
        { name: 'React', level: 5, color: 'bg-blue-400' },
        { name: 'Next.JS', level: 5, color: 'bg-black' },
        { name: 'Tailwind', level: 5, color: 'bg-pink-500' },
        { name: 'Node.JS', level: 5, color: 'bg-green-500' },
      ],
    },
    {
      title: 'DATABASE',
      skills: [
        { name: 'MongoDB', level: 5, color: 'bg-blue-800' },
        { name: 'Express', level: 5, color: 'bg-purple-600' },
        { name: 'Prisma', level: 3, color: 'bg-yellow-300' },
      ],
    },
    {
      title: 'OTHER',
      skills: [
        { name: 'Figma', level: 3, color: 'bg-blue-800' },
        { name: 'Windows', level: 5, color: 'bg-purple-600' },
        { name: 'Linux', level: 4, color: 'bg-yellow-300' },
        { name: 'Github', level: 4, color: 'bg-red-300' },
      ],
    },
  ];

  return (
    <div>
      <section id="skills" className="flex flex-col justify-center content-center py-10 ">
        <div className="flex fle-row just">
          <div className=" h-3 w-60 md:block  bg-zinc-300 rounded-2xl m-5" />
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

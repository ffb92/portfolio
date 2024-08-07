import React from 'react';

const Experience = () => {
  const educationData = [
    {
      institution: 'Testflow GmbH',
      degree: 'HEAD OF ONBOARDING & SUPPORT',
      period: '2021 - 2023',
      description:
        'As Head of Onboarding & Support at Testflow, I developed a comprehensive onboarding program to train customers in the best possible way. I led a team of three onboarding specialists and four IT supporters.',
    },
    {
      institution: 'Bewotec GmbH',
      degree: 'IT - Support',
      period: '2019 - 2021',
      description:
        'In my role as IT Support, I handled customer inquiries and onboardings daily. My ability to explain complex technical concepts in an understandable way significantly improved user efficiency and satisfaction.',
    },
  ];

  const workData = [
    {
      institution: 'Expert Bergisch Gladbach',
      degree: 'Education Retail Salesman',
      period: '2014 - 2018',
    },
    {
      institution: 'Higher commercial School Bergisch Gladbach',
      degree: 'Fachhochschulreife',
      period: '2011 - 2014',
    },
    {
      institution: 'Herkenrath secondary school',
      degree: 'Secondary School',
      period: '2005 - 2011',
    },
  ];

  return (
    <section id="experience" className="flex flex-col justify-center content-center py-10">
      <div className="flex flex-row">
        <div className="h-3 w-60 bg-zinc-300 rounded-2xl m-5" />
        <h2 className="text-4xl md:text-6xl px-10">Experience</h2>
      </div>
      <div className=" sm:p-6 lg:p-8">
        <div className="bg-gray-900 p-4 rounded-lg md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
          {educationData.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p className="text-gray-500">{edu.period}</p>
              <p>{edu.description}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          {workData.map((work, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{work.institution}</h3>
              <p>{work.degree}</p>
              <p className="text-gray-500">{work.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

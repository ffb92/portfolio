const Experience = () => {
  const educationData = [
    {
      institution: 'Universität XYZ',
      degree: 'Bachelor of Science in Informatik',
      period: '2015 - 2019',
      description: 'Beschreibung des Studiengangs und besondere Leistungen.',
    },
    {
      institution: 'Hochschule ABC',
      degree: 'Master of Science in Software Engineering',
      period: '2019 - 2021',
      description: 'Beschreibung des Studiengangs und besondere Leistungen.',
    },
  ];

  const workData = [
    {
      institution: 'test',
      degree: 'Bachelor of Science in Informatik',
      period: '2015 - 2019',
      description: 'Beschreibung des Studiengangs und besondere Leistungen.',
    },
    {
      institution: 'Hteasdas',
      degree: 'Master of Science in Software Engineering',
      period: '2019 - 2021',
      description: 'Beschreibung des Studiengangs und besondere Leistungen.',
    },
  ];

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{edu.institution}</h3>
          <p>{edu.degree}</p>
          <p className="text-gray-500">{edu.period}</p>
          <p>{edu.description}</p>
        </div>
      ))}
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      {workData.map((work, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">{work.institution}</h3>
          <p>{work.degree}</p>
          <p className="text-gray-500">{work.period}</p>
          <p>{work.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;

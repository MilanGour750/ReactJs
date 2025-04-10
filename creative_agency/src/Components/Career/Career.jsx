import React from 'react';

const Career = () => {
  const jobs = [
    { 
      title: 'DESIGNER GRAPHIC',
      skills: ['Skill Required', 'Skill Required', 'Skill Required', 'Extra Skill']
    },
    { 
      title: 'FINANCE MANAGER',
      skills: ['Skill Required', 'Skill Required', 'Skill Required']
    },
    { 
      title: 'PRODUCT DESIGNER',
      skills: ['Skill Required', 'Skill Required', 'Skill Required', 'Extra Skill']
    },
    { 
      title: 'CONTENT WRITING',
      skills: ['Skill Required', 'Skill Required']
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold">CAREER</h1>
        <p className="text-gray-400">Strategies to grow your online</p>
      </div>

      <div className="bg-gray-300 w-full h-64 rounded-lg mb-12"></div>

      <div className="mb-4">
        <h2 className="text-3xl font-bold">OPEN POSITION</h2>
      </div>

      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <div className="flex flex-wrap gap-2 text-gray-400 text-sm mt-1">
                {job.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center w-1/3">
                    <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full  mr-2"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <button className="py-2 px-4 rounded-lg text-black font-bold bg-gradient-to-r from-pink-500 to-orange-500">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;

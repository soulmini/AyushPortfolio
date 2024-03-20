import React from 'react';

const Skills = () => {
  return (
    <div className="text-white">
      <p className="text-sm sm:text-3xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-900 py-8">
        Skills
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="p-6 bg-black rounded-lg shadow-md">
          <h2 className="text-sm sm:text-lg font-semibold mb-4 text-white">Language</h2>
          <ul className="text-xs sm:text-sm text-white">
            <li>• C++</li>
            <li>• C</li>
            <li>• SQL</li>
            <li>• JavaScript</li>
            <li>• Python</li>
            <li>• TypeScript</li>
          </ul>
        </div>
        <div className="p-6 bg-black rounded-lg shadow-md">
          <h2 className="text-sm sm:text-lg font-semibold mb-4 text-white">Frameworks</h2>
          <ul className="text-xs sm:text-sm text-white">
            <li>• ReactJs</li>
            <li>• NextJs</li>
            <li>• Bootstrap</li>
            <li>• TailwindCSS</li>
          </ul>
        </div>
        <div className="p-6 bg-black rounded-lg shadow-md">
          <h2 className="text-sm sm:text-lg font-semibold mb-4 text-white">Backend-End</h2>
          <ul className="text-xs sm:text-sm text-white">
            <li>• NodeJs</li>
            <li>• ExpressJs</li>
            <li>• REST API</li>
          </ul>
        </div>
        <div className="p-6 bg-black rounded-lg shadow-md">
          <h2 className="text-sm sm:text-lg font-semibold mb-4 text-white">Databases</h2>
          <ul className="text-xs sm:text-sm text-white">
            <li>• Prisma</li>
            <li>• MongoDB</li>
            <li>• Firebase</li>
            <li>• MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

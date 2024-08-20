import React from 'react';

const Skills = () => {
  return (
    <div className="text-white bg-black" id = "skills">
      <p className="text-3xl sm:text-3xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-900 py-8">
        Skills
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="p-6 bg-black rounded-lg shadow-md">
          <h2 className="text-md sm:text-lg border-b-2 border-dashed w-fit font-semibold mb-4 text-white">Languages</h2>
          <ul className="text-sm sm:text-sm text-white">
            <li>• C++</li>
            <li>• C</li>
            <li>• JavaScript (ES5/ES6)</li>
            <li>• CSS</li>
            <li>• JSON</li>
            <li>• HTML</li>
            <li>• TypeScript</li>
            <li>• SQL</li>
            <li>• NoSQL</li>
          </ul>
        </div>
        <div className="p-6 bg-black rounded-lg shadow-md">
          <h2 className="text-lg border-b-2 border-dashed w-fit sm:text-lg font-semibold mb-4 text-white">Frameworks</h2>
          <ul className="text-sm sm:text-sm text-white">
            <li>• React.js</li>
            <li>• Next.js</li>
            <li>• Express.js</li>
            <li>• Node.js</li>
            <li>• Tailwind CSS</li>
            <li>• Prisma</li>
            <li>• TurboRepo</li>
          </ul>
        </div>
        <div className="p-6 bg-black rounded-lg shadow-md">
          <h2 className="text-lg sm:text-lg border-b-2 border-dashed w-fit font-semibold mb-4 text-white">Dev Tools</h2>
          <ul className="text-sm sm:text-sm text-white">
            <li>• Visual Studio Code</li>
            <li>• Windows</li>
            <li>• Linux</li>
            <li>• Postman</li>
            <li>• Rest APIs</li>
            <li>• Recoil</li>
          </ul>
        </div>
        <div className="p-6 bg-black rounded-lg shadow-md">
          <h2 className="text-lg sm:text-lg border-b-2 border-dashed w-fit font-semibold mb-4 text-white">Databases</h2>
          <ul className="text-sm sm:text-sm text-white">
            <li>• MongoDB</li>
            <li>• MySQL</li>
            <li>• PostgreSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

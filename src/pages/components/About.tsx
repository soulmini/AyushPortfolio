import React from "react";

function About() {
  return (
    <div className="bg-black max-w-5xl mx-auto px-8 py-8 text-white" id = "about">
      <p className="text-3xl sm:text-3xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-900 py-8">
        Experience & Education
      </p>

      <div className="flex flex-col mb-8">
        <div className="flex items-center mb-6">
          <div className="w-16 h-1 bg-white mr-4"></div>
          <p className="text-lg font-semibold">Work Experience</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">Backend Engineer Intern</h3>
          <p>Hoverin AuroSpace</p>
          <p>Jan 2024 - June 2024</p>
          <p>
            As a Backend Engineer Intern at Hoverin AuroSpace, I worked closely
            with the development team to build and maintain backend systems.
            Responsibilities included:
          </p>
          <ul className="list-disc pl-6">
            <li>Developing RESTful APIs using Node.js and Express.js</li>
            <li>
              Implementing database schemas and queries with MongoDB and
              PostgreSQL
            </li>
            <li>
              Collaborating with frontend developers to integrate backend
              functionality
            </li>
            <li>
              Participating in code reviews and providing feedback on
              colleagues' code
            </li>
          </ul>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-16 h-1 bg-white mr-4"></div>
          <p className="text-lg font-semibold">Education</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold">
          Dr. Bhim Rao Ambedkar University, Agra
          </h3>
          <p>Graduation Date: June 2024</p>
          <p>Degree: Computer Science And Engineering</p>
          <p>Courses: OOPS, DBMS, CN, Software Engineering, OS, Data Structure, Algorithms</p>
        </div>
      </div>
    </div>
  );
}

export default About;

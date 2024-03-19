import React from 'react';
import fs from 'fs';
import path from 'path';
import projects from '../Projects/projects.json'

const Projects = () => {
    return (
        <div className="text-white">
          <p className="text-sm sm:text-3xl font-bold text-center relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-900 py-8">
            Projects
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map(project => (
              <div key={project.title} className="bg-black rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-2">{project.title}</h2>
                <p className="mb-4">{project.frontend.description}</p>
                <div className="flex justify-between">
                  <a href={project.frontend.githubLink} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Frontend GitHub</a>
                  {project.frontend.liveLink && <a href={project.frontend.liveLink} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Frontend Live</a>}
                </div>
                <p className="mb-4">{project.backend.description}</p>
                <div className="flex justify-between">
                  <a href={project.backend.githubLink} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Backend GitHub</a>
                  {project.backend.liveLink && <a href={project.backend.liveLink} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Backend Live</a>}
                </div>
                {project.integration && (
                  <>
                    <p className="mb-4">{project.integration.description}</p>
                    <div className="flex justify-between">
                      <a href={project.integration.githubLink} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Integration GitHub</a>
                      {project.integration.liveLink && <a href={project.integration.liveLink} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">Integration Live</a>}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
    );
};


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'projects.json');
  const jsonData = fs.readFileSync(filePath);
  const projects = JSON.parse(jsonData);

  return {
    props: {
      projects
    }
  };
}

export default Projects;

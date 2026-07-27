import React from "react";
import Container from "../../components/Container/Container";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950"
    >
      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-blue-500 text-sm font-semibold">
            PORTFOLIO
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Selected Projects
          </h2>

          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Explore a selection of projects showcasing my experience in WordPress development, custom plugins, web applications, API integrations, and workflow automation across various industries.
          </p>

        </div>

        {/* Projects */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;
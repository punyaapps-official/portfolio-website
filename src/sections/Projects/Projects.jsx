import React, { useMemo, useState } from "react";
import Container from "../../components/Container/Container";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  // Ambil semua tag teknologi unik dari data project secara otomatis,
  // supaya kalau kamu tambah project baru dengan tech baru, filter ikut update sendiri.
  const tags = useMemo(() => {
    const unique = [];
    projects.forEach((project) => {
      (project.technologies || []).forEach((tech) => {
        if (!unique.includes(tech)) unique.push(tech);
      });
    });
    return ["All", ...unique];
  }, []);

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) =>
          (project.technologies || []).includes(activeTag)
        );

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-black"
    >
      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[4px] text-neutral-900 dark:text-neutral-100 text-sm font-semibold">
            PORTFOLIO
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4">
            Selected Projects
          </h2>

          <p className="mt-6 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
            Explore a selection of projects showcasing my experience in WordPress development, custom plugins, web applications, API integrations, and workflow automation across various industries.
          </p>

        </div>

        {/* Filter */}

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-12">

          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeTag === tag
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900 dark:border-white"
                  : "bg-transparent text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100"
              }`}
            >
              {tag}
            </button>
          ))}

        </div>

        {/* Projects */}

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}

        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-neutral-500 dark:text-neutral-400 mt-14">
            No projects found for "{activeTag}".
          </p>
        )}

      </Container>
    </section>
  );
}

export default Projects;
